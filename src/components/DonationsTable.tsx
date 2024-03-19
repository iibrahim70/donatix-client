import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import DonationsForm from "./forms/DonationForm";
import { Modal } from "antd";
import FormWrapper from "./forms/FormWrapper";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormSubmit from "./forms/FormSubmit";
import Swal from "sweetalert2";
import axios from "axios";
import { IDonation } from "@/types";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import "react-loading-skeleton/dist/skeleton.css";
import { useGetDonationsQuery } from "@/redux/services/api";
import { useSkeletonTheme } from "@/hooks/useSkeletonTheme";

const DonationsTable = () => {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IDonation | null>(null);
  const { skeletonBaseColor, skeletonHighlightColor } = useSkeletonTheme();
  const { isLoading, error, data, refetch } = useGetDonationsQuery(undefined);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleUpdate = (data: IDonation) => {
    setIsModalOpen(true);
    setSelectedItem(data);
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setIsLoading(true);

          // Ensure 'amount' is a number
          const amountAsNumber = Number(data?.amount);

          const res = await axios.patch(
            `https://givers-heaven-server.vercel.app/api/v1/donations/${selectedItem?._id}`,
            { ...data, amount: amountAsNumber }
          );

          if (res?.data?.success === true) {
            refetch();
            setIsLoading(false);
            setIsModalOpen(false);
            Swal.fire({
              title: "Updated!",
              text: "Selected item has been updated.",
              icon: "success",
            });
            reset();
          } else {
            throw new Error(
              "Failed to update donation. Please try again later."
            );
          }
        }
      });
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An error occurred",
        text: "Something went wrong.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(
            `https://givers-heaven-server.vercel.app/api/v1/donations/${id}`
          );

          if (res?.data?.success === true) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Selected item has been deleted.",
              icon: "success",
            });
          } else {
            throw new Error(
              "Failed to delete donation. Please try again later."
            );
          }
        }
      });
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An error occurred",
        text: "Something went wrong.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (error) {
    return (
      <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center">
        Error fetching data.
      </div>
    );
  }

  return (
    <section className="my-10 space-y-5 lg:px-5">
      {isLoading ? (
        <div className="mt-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Skeleton
                height={100}
                baseColor={skeletonBaseColor}
                highlightColor={skeletonHighlightColor}
                className="mb-2"
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-end">
            <Link to="/dashboard/create-donation" className={buttonVariants()}>
              Add Donation
            </Link>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Donation Title</TableHead>
                <TableHead>Donation Category</TableHead>
                <TableHead>Need Amount</TableHead>
                <TableHead>Action</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            {data?.data?.map((item: IDonation) => (
              <TableBody key={item?._id}>
                <TableRow>
                  <TableCell>
                    <img
                      src={item.donationImage}
                      alt={item?.title}
                      className="rounded-full h-[70px] w-[70px] object-cover"
                    />
                  </TableCell>

                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="font-medium">{item.category}</TableCell>
                  <TableCell className="font-medium">${item.amount}</TableCell>

                  <TableCell>
                    <Button
                      onClick={() => handleUpdate(item)}
                      className="rounded-full"
                      variant="greyish-blue"
                      size="sm"
                    >
                      Update
                    </Button>
                  </TableCell>

                  <TableCell>
                    <Button
                      onClick={() => handleDelete(item?._id)}
                      className="rounded-full"
                      variant="default"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </>
      )}

      <Modal title="Update Donation" open={modalOpen} onCancel={handleCancel}>
        {selectedItem && (
          <FormWrapper
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
          >
            {/* form  */}
            <DonationsForm
              register={register}
              errors={errors}
              data={selectedItem}
            />

            {/* form submit */}
            <FormSubmit loading={loading} title="Update" />
          </FormWrapper>
        )}
      </Modal>
    </section>
  );
};

export default DonationsTable;
