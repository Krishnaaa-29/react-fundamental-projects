import { Form, useNavigation } from "react-router-dom";
import { styled } from "styled-components";

const SearchForm = ({ search }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={search}
          placeholder="Search for your drink"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 6rem;
  .form {
    background: var(--cardColor);
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input {
    color: var(--textColor);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export default SearchForm;
