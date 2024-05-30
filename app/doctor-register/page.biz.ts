/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { apiCreatePerson, apiGetById, apiUpdatePerson } from "@/util/api-request";
import { useLocaleStorage } from "@/util/useLocaleStorge";
import { useBreakpointValue, useToast } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function usePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [editPerson, setEditPerson] = useState<any>();

  useEffect(() => {
    id && apiGetById(id).then((person) => setEditPerson(person));
  }, []);

  const [loading, setLoading] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ values: editPerson, });

  const toast = useToast();
  const position = useBreakpointValue({
    base: "top", // Default for smaller screens (mobile)
    md: "top", // Position on bottom-right for larger screens
  }) as any;

  const { offlineStoreForm, offlineStore_NAME } = useLocaleStorage();

  const onSubmit = async (e: any) => {
    if (navigator.onLine) {
      await submitOnline(e);
    } else {
      setLoading(false);
      reset();
      toast({
        title: "OFFLINE",
        description:
          "شما افلاین هستید، ولی فرم شما ثبت شده  در صورت انلاین شدن فرم ارسال میشود",
        status: "loading",
        duration: 2000,
        isClosable: true,
        position,
      });
      const DB = offlineStoreForm?.length ? offlineStoreForm : [];
      DB.push(e);
      if (typeof window !== 'undefined') localStorage?.setItem(offlineStore_NAME, JSON.stringify(DB));
    }
  };

  useEffect(() => {
    if (navigator.onLine && offlineStoreForm?.length > 0) {
      const submitOfflineForm = async (formIndex: number) => {
        const formToSubmit = offlineStoreForm[formIndex];
        await apiCreatePerson(formToSubmit)
          .then((data) => {
            offlineStoreForm.splice(formIndex, 1);
            if (typeof window !== 'undefined') localStorage?.setItem(
              offlineStore_NAME,
              JSON.stringify(offlineStoreForm)
            );

            setLoading(false);
            reset(),
              toast({
                description: "افزودن پزشک با موفیت انجام شد",
                status: "success",
                duration: 2000,
                isClosable: true,
                position,
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            toast({
              description: "ارتباط با سرور با خطا مواجه شد",
              status: "error",
              duration: 2000,
              isClosable: true,
              position,
            });
          });
      };

      offlineStoreForm?.length > 0 && submitOfflineForm(0);
    }
  }, [offlineStoreForm]);

  const submitOnline = async (e: any) => {
    setLoading(true);
    if(id) {
      apiUpdatePerson(e)
      .then((data) => {
        setLoading(false);
        reset(),
          toast({
            description: "افزودن پزشک با موفیت انجام شد",
            status: "success",
            duration: 2000,
            isClosable: true,
            position,
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast({
          description: "ارتباط با سرور با خطا مواجه شد",
          status: "error",
          duration: 2000,
          isClosable: true,
          position,
        });
      });
    }
    else apiCreatePerson(e)
      .then((data) => {
        setLoading(false);
        reset(),
          toast({
            description: "افزودن پزشک با موفیت انجام شد",
            status: "success",
            duration: 2000,
            isClosable: true,
            position,
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast({
          description: "ارتباط با سرور با خطا مواجه شد",
          status: "error",
          duration: 2000,
          isClosable: true,
          position,
        });
      });
  };

  return {
    onSubmit,
    loading,
    errors,
    register,
    handleSubmit,
    control,
    id,
    editPerson,
    getValues,
    setValue
  };
}
