const Header = ({ title }: { title: string }) => {
  return (
    <div className="px-4 py-3 btn-gradient inline-block font-medium text-h2 rounded-md 2xl:text-5xl">
      {title}
    </div>
  );
};

export default Header;
