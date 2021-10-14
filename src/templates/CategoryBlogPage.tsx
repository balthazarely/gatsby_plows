import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import { BlogCard } from '../components/Elements/Cards/BlogCard';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageElements/PageHeader';
import { frameVariants } from '../animations/animations';
import { SEO } from '../components/Metadata/SEO';

interface BlogTypes {
  frontmatter: {
    categories: string[];
    date: string;
    path: string;
    title: string;
    thumbnail: {
      childImageSharp: {
        gatsbyImageData: any;
      };
    };
  };
}

interface CategoryPropTypes {
  pageContext: {
    category: string;
    id: string[];
  };
  data: {
    allMdx: {
      nodes: BlogTypes[];
    };
  };
}

const CategoryBlogPage = ({ pageContext, data }: CategoryPropTypes) => {
  return (
    <Layout currentRoute="/blog">
      <SEO title={`${pageContext.category} Blogs`} />
      <div className="page__container ">
        <PageHeader
          pageTitle={`${pageContext.category} Blogs`}
          centered={false}
        />
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8 "
          variants={frameVariants}
          initial="hidden"
          animate="visible"
        >
          {data.allMdx.nodes.map(({ frontmatter }: BlogTypes) => (
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
      </div>
    </Layout>
  );
};

export default CategoryBlogPage;

export const query = graphql`
  query CategoryListQuery($ids: [String]!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { id: { in: $ids } }
    ) {
      nodes {
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
