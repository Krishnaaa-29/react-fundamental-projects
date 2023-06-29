import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>
        Introducing "MixMaster," the ultimate party sidekick app that fetches
        cocktails from the hilarious Cocktails DB API. With a flick of your
        finger, you'll unlock a treasure trove of enchanting drink recipes
        that'll make your taste buds dance and your friends jump with joy. Get
        ready to shake up your mixology game, one fantastical mocktail at a
        time, and let the laughter and giggles flow!
      </p>
      <p>
        In this Project, I have used React Libraries such as React Router Dom to
        establish links between the pages and make a hassle free linking between
        different pages. I have also used React Query to save the cache and
        instantly load them again if they are searched again without actually
        fetching from the API. This saves the loading time and helps user to get
        the data faster. I have also used styled components to style this
        website as one, I was trying different libraries which might help me in
        writing CSS. Styled components allows to Wrap our jsx element and apply
        all the style we write in it. It is useful as it eliminates the need to
        thinking new classnames for every html tag.
      </p>
      <p>
        Later, I plan to integrate NewsLetter feature as it requires to create
        an API and post the data at that site. Posting this can be done using
        Form from React Router Dom and keeping the method="POST" in html form.
        This will allow us to send our data to the API and work efficiently.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;

export default About;
