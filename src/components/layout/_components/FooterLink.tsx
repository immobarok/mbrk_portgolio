const FooterLink = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto py-6 items-center bg-background">
      <section className="flex flex-col justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold text-destructive">
            immobarokali2001@gmail.com
          </h1>
          <h3 className="text-lg">01522-119021</h3>
        </div>
        <div>
          @2025 NAKULA. All Rights Reserved Privacy Policy Terms of Service
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <div>
          <a href="#" className="text-lg">Facebook</a>
          <a href="#" className="text-lg">Twitter</a>
          <a href="#" className="text-lg">Instagram</a>
        </div>
      </section>
      
    </div>
  );
};
export default FooterLink;
