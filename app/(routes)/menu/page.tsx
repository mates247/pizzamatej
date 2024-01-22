import OnePizza from "@/app/components/OnePizza";

const Page = ({}: PageProps) => {
  return (
    <div className="text-center">
      <h1 className="h1-site">Naše Menu:</h1>
      <OnePizza />
    </div>
  );
};

interface PageProps {}

export default Page;
