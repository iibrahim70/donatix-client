import DonationTransactionForm from "@/components/forms/DonationTransactionForm";
import FormSubmit from "@/components/forms/FormSubmit";
import FormWrapper from "@/components/forms/FormWrapper";
import { Button } from "@/components/ui/button";
import { useAddDonationTransactionMutation } from "@/redux/services/api";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface IDonationDetails {
  _id: string;
  title: string;
  description: string;
  category: string;
  amount: number;
  donationImage: string;
}

const DonationDetails = () => {
  // Get user ID from localStorage
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [modalOpen, setIsModalOpen] = useState<boolean>(false);
  const [addData, { isSuccess, isLoading, error }] =
    useAddDonationTransactionMutation();

  const donationDetails = useLoaderData() as IDonationDetails;
  const { _id, title, description, category, amount, donationImage } =
    donationDetails;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const showModal = () => {
    if (userId) {
      setIsModalOpen(true);
    } else {
      navigate("/signin");
    }
  };

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
  };

  const onSubmit = async (data: FieldValues) => {
    // Insert data to the database
    await addData(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
      setIsModalOpen(false);
      reset();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for your donation!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "An error occurred",
        text: "Something went wrong.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [isSuccess, error, reset, navigate]);

  return (
    <main className="dark:bg-light-black flex items-center justify-between min-h-[calc(100dvh-64px)]">
      <div className="section-wrapper max-xl:py-10">
        <div className="flex justify-end mb-10">
          <Button onClick={showModal} variant="greyish-blue">
            Donate
          </Button>
        </div>

        <Modal title="Donate Now!" open={modalOpen} onCancel={handleCancel}>
          <FormWrapper
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
          >
            <DonationTransactionForm
              register={register}
              errors={errors}
              donationId={_id}
            />
            <FormSubmit loading={isLoading} title="Donate" />
          </FormWrapper>
        </Modal>

        <div className="flex items-center justify-between gap-10 xl:gap-20 flex-col xl:flex-row">
          <img
            src={donationImage}
            alt={title}
            className="rounded-md w-full object-cover"
          />

          <div className="space-y-5">
            <h3>{title}</h3>

            <p className="text-justify">{description}</p>
            <p>Category: {category}</p>
            <p>Amount Needed: ${amount}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonationDetails;
