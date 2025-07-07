import { authServerSession } from "@/lib/auth";
import Card from "@/components/shared/Card/Card";
import GoogleButton from "@/components/shared/buttons/GoogleButton";
import LogoutButton from "@/components/shared/buttons/LogoutButton";
import Image from "next/image";

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>

export default async function SignIn({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const session = await authServerSession();
  const { error } = await searchParams;

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen -mb-11 overflow-hidden bg-gray-50">
      <div className="w-full p-6 m-auto lg:max-w-xl text-center">
        <Card className="p-8">
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="text-xl font-bold">
              Sign in to {process.env.NEXT_PUBLIC_APP_TITLE}
            </h1>
            <Image
              className="relative mx-auto"
              src={process.env.NEXT_PUBLIC_LOGO || "/next.svg"}
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <GoogleButton />
            {session && <LogoutButton />}
            {error && (
              <div className="text-primary-500 text-md text-center">
                Sorry, an error occurred when logging in. Please try again or
                get in touch by emailing{" "}
                <a
                  href="mailto:contact@element-software.co.uk"
                  className="font-bold underline"
                >
                  contact@element-software.co.uk
                </a>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
