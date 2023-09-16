"use client";

import * as z from "zod";
import { Companion, Category } from "@prisma/client";
import { useForm } from "react-hook-form";

interface CompanionFormProps {
    initialData: Companion | null;
    categories: Category[]
}

const fromSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required."
    }),
    description: z.string().min(1, {
        message: "Description is required."
    }),
    instruction: z.string().min(200, {
        message: "Instructions require at least 200 characters."
    }),
    seed: z.string().min(200, {
        message: "Seed require at least 200 characters."
    }),
    src: z.string().min(1, {
        message: "Image is required."
    }),
    categoryId: z.string().min(1, {
        message: "Category is required."
    }),
})

export const CompanionForm = ({
    categories,
    initialData
}: CompanionFormProps) => {
    return (
        <div>
            Companion Form
        </div>
    )
}