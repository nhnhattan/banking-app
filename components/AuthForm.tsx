"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  return <section className="auth-form">AuthForm</section>;
};

export default AuthForm;
