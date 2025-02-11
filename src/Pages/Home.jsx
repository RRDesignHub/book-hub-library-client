import { BookCategoryCard } from "../components/BookCategoryCard";
import { FeaturedBook } from "../components/FeaturedBook";
import { Hero } from "../components/Hero";
import { Helmet } from "react-helmet";
import { NewsLetter } from "../components/NewsLetter";
import { Testimonial } from "../components/Testimonial";
export const Home = () => {
  return (
    <>
      <Helmet>
        <title>BH - Home</title>
      </Helmet>
      <Hero></Hero>
      <BookCategoryCard></BookCategoryCard>
      <div>
        <FeaturedBook></FeaturedBook>
      </div>
      <Testimonial></Testimonial>
      {/* <NewsLetter></NewsLetter> */}
    </>
  );
};
