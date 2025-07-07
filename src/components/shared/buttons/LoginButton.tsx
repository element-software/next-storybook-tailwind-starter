"use client";

import { signIn } from "next-auth/react";

import type { ClientSafeProvider } from "next-auth/react";

export default function LoginButton({ auth }: { auth?: ClientSafeProvider }) {
  return (
    <button
      type="button"
      className="rounded-md bg-primary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      onClick={() => signIn(auth?.id || "")}
    >
      {auth ? `Sign In with ${auth.name}` : "Login"}
    </button>
  );
}
