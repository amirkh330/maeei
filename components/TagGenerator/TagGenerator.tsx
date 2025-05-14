import { useState, useRef, useEffect } from "react";
import {
  Tag,
  TagCloseButton,
  TagLabel,
  Input,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { useController, Control } from "react-hook-form";

interface TagGeneratorProps {
  control: Control;
  name: string;
}

export default function TagGenerator({ control, name }: TagGeneratorProps) {
  const { field, fieldState, formState } = useController({ control, name });
  const { value, onChange } = field; // Use provided onChange handler
  const { error } = fieldState;
  useEffect(() => {
    setTags(value ?? []);
  }, [value]);
  const [tags, setTags] = useState<string[]>([]);
  const [valueInput, setValueInput] = useState<string>("");

  const handleTagClose = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
    onChange(updatedTags); // Update form field value using onChange
  };

  const handleInputKeyDown = () => {
    const updatedTags = [...tags, valueInput];
    setValueInput("");
    setTags(updatedTags);
    onChange(updatedTags);
  };

  return (
    <Flex flexWrap="wrap">
      {tags.map((tag, index) => (
        <Tag
          key={index}
          borderRadius="full"
          variant="solid"
          colorScheme="blue"
          mr={2}
          mb={2}
        >
          <TagLabel fontSize={12}>{tag}</TagLabel>
          <TagCloseButton onClick={() => handleTagClose(tag)} />
        </Tag>
      ))}
      <Flex
        align="center"
        border={"1px solid"}
        borderColor={"gray.500"}
        borderRadius="8px"
        h={"32px"}
        w="100%"
      >
        <Input
          isInvalid={!!error}
          _placeholder={{ color: "gray.600" }}
          textColor={"black"}
          border={"none"}
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          _focusVisible={"noen"}
          placeholder="وارد کنید"
        />
        <Button
          isDisabled={!valueInput}
          onClick={handleInputKeyDown}
          size="xs"
          colorScheme="blue"
          mx="1"
        >
          <Text fontSize={10}>تایید</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
