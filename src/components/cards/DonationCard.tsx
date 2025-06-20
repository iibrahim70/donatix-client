"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { ICause } from "@/types";
import Link from "next/link";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Progress,
} from "../ui";

export const DonationCard = ({ data }: { data: ICause }) => {
  const [amount, setAmount] = useState("");
  const presetAmounts = [10, 25, 50, 100, 250, 500];

  const raisedAmount = data?.received_amount || 0;
  const targetAmount = data?.target_amount || 1;
  const progressPercentage = (raisedAmount / targetAmount) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>
          Your support helps us achieve our goals.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3.5">
        <div className="grid grid-cols-3 gap-2.5">
          {presetAmounts?.map((value) => (
            <Button
              key={value}
              variant={amount === String(value) ? "default" : "outline"}
              onClick={() => setAmount(String(value))}
            >
              ${value}
            </Button>
          ))}
        </div>

        <Input
          type="number"
          placeholder="Or enter a custom amount"
          value={amount}
          onChange={(e) => setAmount(e?.target?.value)}
        />

        <div className="pt-3 space-y-2.5">
          <Progress value={progressPercentage} />

          <div className="flex justify-between gap-5">
            <div className="flex items-center gap-1.5">
              <p className="font-bold text-foreground">
                ${raisedAmount.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">raised</p>
            </div>

            <p className="text-sm text-muted-foreground">
              of ${targetAmount.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="pt-2 space-y-1.5">
          <Button size="lg" className="w-full text-base">
            Donate Now
          </Button>

          <Button variant="ghost" className="w-full">
            <Share2 />
            Share this cause
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Donate anonymously or{" "}
          <Link
            href="/signin"
            className="text-blue-500 text-sm underline underline-offset-2"
          >
            sign in
          </Link>{" "}
          to track your impact.
        </p>
      </CardContent>
    </Card>
  );
};
