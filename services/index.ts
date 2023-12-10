import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '';

export const handleBlogPosts = async () => {
	const query = gql`
		query MyQuery {
			posts {
				slug
				categories {
					name
				}
				title
				image {
					url
				}
				createdAt
			}
			categories {
				name
				slug
			}
		}
	`;

	const result: any = await request(graphqlAPI, query);
	return result;
};

export const handlePostDetails = async (slug: string) => {
	const query = gql`
		query myQuery($slug: String!) {
			post(where: { slug: $slug }) {
				content
				slug
				title
				author {
					name
					image {
						url
					}
					bio
					slug
				}
				image {
					url
				}
				categories {
					name
					slug
				}
			}
		}
	`;

	const result: any = await request(graphqlAPI, query, { slug });
	return result.post;
};

export const handleSimiliarPosts = async (slug: string, categories: string[]) => {
	const query = gql`
		query myQuery($slug: String!, $categories: [String!]) {
			posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
				title
				image {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result: any = await request(graphqlAPI, query, { slug, categories });
	return result.posts;
};

export const handleCategoryPosts = async (slug: string) => {
	const query = gql`
		query myQuery($slug: String!) {
			posts(where: { categories_some: { slug: $slug } }) {
				title
				slug
				image {
					url
				}
				createdAt
				categories {
					name
					slug
				}
			}
		}
	`;

	const result: any = await request(graphqlAPI, query, { slug });
	return result.posts;
};

export const handleAuthorDetails = async (slug: string) => {
	const query = gql`
		query myQuery($slug: String!) {
			author(where: { slug: $slug }) {
				description
				image {
					url
				}
				name
				posts {
					createdAt
					slug
					title
					image {
						url
					}
					categories {
						name
					}
				}
			}
		}
	`;

	const result: any = await request(graphqlAPI, query, { slug });
	return result.author;
};

export const handleAuthors = async () => {
	const query = gql`
		query MyQuery {
			authors {
				bio
				description
				image {
					url
				}
				name
				slug
			}
		}
	`;

	const result: any = await request(graphqlAPI, query);
	return result.authors;
};

export const handleCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				name
				slug
			}
		}
	`;

	const result: any = await request(graphqlAPI, query);
	return result.categories;
};
