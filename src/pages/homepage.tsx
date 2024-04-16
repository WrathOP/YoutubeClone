import React from "react";
import Table from "../components/table";
import { createColumnHelper } from "@tanstack/react-table";

const Homepage: React.FC = () => {
  const columnHelper = createColumnHelper();


  const columns = [
    columnHelper.accessor("product_request_code", {
      cell: (info) => info.getValue(),
      header: () => "Request Code",
      enableSorting: true,
    }),

    columnHelper.accessor("counter_location.counter_hdr_id.counter_code", {
      cell: (info) => info.getValue(),
      header: () => "Doctor Code",
      enableSorting: true,
    }),
    columnHelper.accessor(
      "counter_location.counter_hdr_id.app_usertype.app_usertype_code",
      {
        cell: (info) => info.getValue(),
        header: () => "App Type",
        enableSorting: true,
      }
    ),
    columnHelper.accessor("drph_lnk_type.dr_ph_lnk_code", {
      cell: (info) => info.getValue(),
      header: () => "Type",
      enableSorting: true,
    }),
    columnHelper.accessor("counter_location.counter_hdr_id.counter_name", {
      cell: (info) => info.getValue(),
      header: () => "Doctor Name",
      enableSorting: true,
    }),
    columnHelper.accessor("pharmacist_data.counter_id", {
      cell: (info) => info.getValue(),
      header: () => "Pharmacy Code",
      enableSorting: true,
    }),
    columnHelper.accessor("pharmacist_data.counter_name", {
      cell: (info) => info.getValue(),
      header: () => "Pharmacy Name",
      enableSorting: true,
    }),

    columnHelper.accessor("counter_location.location_name", {
      cell: (info) => info.getValue(),
      header: () => "Location",
      enableSorting: true,
    }),
    columnHelper.accessor("company_code.name", {
      cell: (info) => info.getValue(),
      header: () => "Company",
      enableSorting: true,
    }),
    columnHelper.accessor("mobile", {
      cell: (info) => info.getValue(),
      header: () => "Mobile",
      enableSorting: true,
    }),
  ];

  return (
    <div>
      <h1>Homepage</h1>
      <Table columns={columns} data={[]} />
    </div>
  );
};

export default Homepage;
