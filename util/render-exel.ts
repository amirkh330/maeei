import React from "react";
import * as XLSX from "xlsx";
import { Workbook } from 'exceljs';
import { expertsList, provinceList } from "./Data";

export const renderExcel =async(data: any) => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Data');
    worksheet.views = [
        {
          rightToLeft: true, // Set right-to-left view for the sheet
        },
      ];
    worksheet.columns = [
        { header: 'نام', key: 'name', width: 20 },
        { header: 'نام خانوادگی', key: 'family', width: 20 },
        { header: 'شماره موبایل', key: 'mobile', width: 20 },
        { header: 'استان', key: 'province', width: 20 },
        { header: 'تخصص', key: 'expertsList', width: 30 },
        { header: 'آدرس', key: 'address', width: 50 },
      ];
    worksheet.addRows(data.map((item:any) => ({
        name: item.name,
        family: item.family,
        mobile: item.mobile,
        province:  provinceList.find((i: any) => i.id == item.province)?.title,
        expertsList: expertsList.find((i: any) => i.id == item.expertise)?.title,
        address:item.address

    })));
    console.log('worksheet:', worksheet)
  
      const buffer = await workbook.xlsx.writeBuffer();
  
      // Download using Blob (similar to previous approach)
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'maeei.xlsx';
      link.click();
  
      // Optional: Revoke the object URL after download to avoid memory leaks
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};
