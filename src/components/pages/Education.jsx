import Card from "../Card";

const Education = () => {
  return (
    <section className="px-8 py-24 bg-gray-900 text-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 dark:text-white light:text-black">Education</h2>
      </div>
      <div className="mt-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Education;

