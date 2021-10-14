import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layouts/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { PrevBlogBtn } from '../components/Elements/Buttons/PrevBlogBtn';
import { NextBlogBtn } from '../components/Elements/Buttons/NextBlogBtn';
import { SEO } from '../components/Metadata/SEO';
import { HiTag } from 'react-icons/hi';
import { TagButton } from '../components/Elements/Buttons/TagButton';
import { HiChevronLeft } from 'react-icons/hi';

interface mdxProps {
  data: {
    mdx: {
      body: any;
      frontmatter: {
        title: string;
        date: string;
        categories: string[];
        thumbnail: {
          childImageSharp: {
            gatsbyImageData: any;
          };
        };
      };
    };
  };
  pageContext: any;
}

const blog = ({ data, pageContext }: mdxProps) => {
  const { frontmatter, body } = data.mdx;
  const image = getImage(frontmatter.thumbnail.childImageSharp.gatsbyImageData);
  return (
    <Layout currentRoute="/blog">
      <SEO title={`Blog - ${frontmatter.title}`} />
      <div className="blog__container py-40 h-full items-center flex flex-col justify-between ">
        <div className="w-full ">
          <Link to="/latest-news">
            <button className="flex items-center group">
              <HiChevronLeft className="h-8 text-2xl text-theme-300 group-hover:text-theme-700 duration-150" />
              <span className="text-sm tracking-wide font-semibold uppercase text-theme-300 group-hover:text-theme-700 duration-150">
                Back to Latest News
              </span>
            </button>
          </Link>
        </div>
        <div className="text-4xl my-6   font-bold text-center leading-normal text-gray-900">
          {frontmatter.title}
        </div>
        <div className="mb-2  flex flex-row justify-between  w-full">
          <div className="text-sm  font-semibold text-center leading-normal text-gray-500">
            {frontmatter.date}
          </div>
          <div className="tags flex  items-end ">
            <HiTag className="text-theme-300 mr-1" />
            {pageContext.categories.map((category: string) => (
              <TagButton key={category} category={category} />
            ))}
          </div>
        </div>
        <GatsbyImage
          className=" w-full h-full mb-4"
          // @ts-ignore
          image={image}
          alt="blog post image"
        />
        <div className="markdown mt-4 mb-20 ">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="flex justify-between w-full ">
          {pageContext.previous && (
            <PrevBlogBtn
              path={pageContext.previous.frontmatter.path}
              title={pageContext.previous.frontmatter.title}
            />
          )}
          {pageContext.next && (
            <NextBlogBtn
              path={pageContext.next.frontmatter.path}
              title={pageContext.next.frontmatter.title}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        categories
        date(formatString: "MMMM Do, YYYY")
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default blog;
