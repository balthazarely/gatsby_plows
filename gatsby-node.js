const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/Blog.tsx`);

  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              categories
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogs = result.data.allMdx.edges;
  blogs.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {
        id: node.id,
        categories: node.frontmatter.categories,
        previous: previous,
        next: next,
      },
    });
  });

  const dedupedCategories = dedupeCategories(result.data.allMdx);
  dedupedCategories.forEach((category) => {
    reporter.info(`Creating page: category/${category}`);
    createPage({
      path: `blog/category/${category}`,
      component: require.resolve('./src/templates/CategoryBlogPage.tsx'),
      context: {
        category,
        ids: result.data.allMdx.edges
          .filter(({ node }) => {
            return node.frontmatter.categories.includes(category);
          })
          .map(({ node }) => node.id),
      },
    });
  });
};

function dedupeCategories(blog) {
  // Get a list of all the categories
  const uniqueCategories = new Set();
  blog.edges.forEach(({ node }) => {
    node.frontmatter.categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });
  return Array.from(uniqueCategories);
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // turn off source-maps
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
