import { GraphQLClient, gql } from "graphql-request";

// create a graphql client
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_ENDPOINT);

// get slides
export const getSlides = async (locale) => {
  const query = gql`
    query Slides {
      slides(orderBy: rank_ASC, first: 100) {
        cover {
          url
        }
        localizations(includeCurrent: true, locales: ${locale}) {
          heading
          subheading
        }
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.slides;
  } catch (error) {
    console.error("Error fetching slides:", error);
    return {};
  }
};

// get intro
export const getAbout = async (locale) => {
  const query = gql`
    query About {
      abouts(first: 1) {
        video
        localizations(includeCurrent: true, locales: ${locale}) {
          description {
            html
          }
        }
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.abouts[0];
  } catch (error) {
    console.error("Error fetching about:", error);
    return {};
  }
};

// get home programs
export const getHomePrograms = async (locale) => {
  const query = gql`
    query Programs {
      programs(orderBy: date_ASC, first: 3) {
        cover {
          url
        }
        slug
        video
        date
        localizations(locales: ${locale}, includeCurrent: true) {
          title
          description {
            html
          }
        }
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.programs;
  } catch (error) {
    console.error("Error fetching home programs:", error);
    return {};
  }
};

// get home gallery
export const getHomeGallery = async () => {
  const query = gql`
    query Gallery {
      galleries(first: 1) {
        image {
          url
        }
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.galleries[0].image.slice(-6).reverse();
  } catch (error) {
    console.error("Error fetching home gallery:", error);
    return {};
  }
};

// get gallery
export const getGallery = async () => {
  const query = gql`
    query Gallery {
      galleries(first: 1) {
        image {
          url
        }
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.galleries[0].image.reverse();
  } catch (error) {
    console.error("Error fetching home gallery:", error);
    return {};
  }
};

// get councils
export const getCouncils = async (locale) => {
  const query = gql`
    query Councils {
      councils(orderBy: rank_ASC, first: 20) {
        localizations(locales: ${locale}, includeCurrent: true) {
          title
        }
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.councils;
  } catch (error) {
    console.error("Error fetching councils:", error);
    return {};
  }
};

// get members
export const getMembers = async (locale) => {
  const query = gql`
    query Members {
      members(first: 1000) {
        avatar {
          url
        }
        localizations(locales: ${locale}, includeCurrent: true) {
          name
          council {
            title
          }
        }
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.members;
  } catch (error) {
    console.error("Error fetching members:", error);
    return {};
  }
};

// get contact
export const getContact = async (locale) => {
  const query = gql`
    query Contact {
      contacts(first: 1) {
        map {
          url
        }
        localizations(locales: ${locale}, includeCurrent: true) {
          location
        }
        email
        secondaryEmail
        phone
        secondaryPhone
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.contacts[0];
  } catch (error) {
    console.error("Error fetching contact:", error);
    return {};
  }
};
