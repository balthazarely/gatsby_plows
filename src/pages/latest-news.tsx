import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import { BlogCard } from '../components/Elements/Cards/BlogCard';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageElements/PageHeader';
import {
  frameVariants,
  sectionLayoutChildAnimation,
} from '../animations/animations';
import { SEO } from '../components/Metadata/SEO';
import BeatLoader from 'react-spinners/BeatLoader';

interface allMdxProps {
  data: {
    allMdx: {
      nodes: mdxNodes[];
    };
  };
  location: Location;
}

interface mdxNodes {
  frontmatter: {
    title: string;
    date: string;
    path: string;
    id: string;
    categories: string[];
    thumbnail: {
      childImageSharp: {
        gatsbyImageData: any;
      };
    };
  };
}

const LatestNews = ({ data, location }: allMdxProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [color, setColor] = useState<string>('#61C8F3');
  const [postsPerPage, setPostsPerPage] = useState<number>(6);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [loadingTime, setLoadingTime] = useState<number>(750);

  // Array of all news articles
  const allBlogPosts = data.allMdx.nodes;

  // State for the list
  const [blogPosts, setBlogPosts] = useState<mdxNodes[]>([
    ...allBlogPosts.slice(0, postsPerPage),
  ]);

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState<boolean>(
    allBlogPosts.length > postsPerPage
  );

  // Load more button click
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoadMore(true);
      setLoading(false);
    }, loadingTime);
  };

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = blogPosts.length;
      const isMore = currentLength < allBlogPosts.length;
      const nextResults = isMore
        ? allBlogPosts.slice(currentLength, currentLength + postsPerPage)
        : [];
      setBlogPosts([...blogPosts, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]);

  //Check if there is more
  useEffect(() => {
    const isMore = blogPosts.length < allBlogPosts.length;
    setHasMore(isMore);
  }, [blogPosts]);

  return (
    <Layout currentRoute={location.pathname}>
      <SEO title="Latest News" />
      <div className="page__container ">
        <PageHeader pageTitle="Latest News" centered={false} />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 "
          variants={frameVariants}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map(({ frontmatter }) => (
            <div key={frontmatter.title}>
              <BlogCard
                categories={frontmatter.categories}
                title={frontmatter.title}
                path={frontmatter.path}
                date={frontmatter.date}
                image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
              />
            </div>
          ))}
        </motion.div>
        {hasMore ? (
          <motion.div
            className=" w-100 h-36 flex justify-center items-center"
            variants={frameVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={sectionLayoutChildAnimation}>
              <motion.button
                initial="rest"
                className={`py-2 px-4 m-1 bg-theme-300 hover:bg-theme-500 focus:ring-theme-500 focus:ring-offset-indigo-200 text-white  transition-all ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm flex flex-row  ${
                  loading ? 'hidden ' : 'visible'
                }`}
                onClick={handleLoadMore}
              >
                Load More
              </motion.button>
            </motion.div>
            <BeatLoader color={color} loading={loading} size={15} />
          </motion.div>
        ) : (
          <div className=" w-100 h-36 flex justify-center items-center">
            <p className="text-accuterraBlue-500 text-base font-semibold ">
              You've reached the end of our blog!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LatestNews;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          categories
          date(formatString: "MMMM Do, YYYY")
          path
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100)
            }
          }
        }
      }
    }
  }
`;
