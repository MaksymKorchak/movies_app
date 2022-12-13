import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import { Form } from "react-final-form";
import { 
	YearField, 
	ReleaseYearField, 
	GenreField, 
	AdultField, 
	SubmitField, 
	SortField,
	SortDirectionField
 } from "./components";
 import { GENRES_QUERY } from "./queries";
 import { FormattedMessage } from "react-intl"

const Filters = ({ onSubmit, initialValues }) => {
	const {loading, error, data} = useQuery(GENRES_QUERY);

	if(loading){
		return <FormattedMessage id="loading"/>
	}

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
				gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: 'center', gap: '20px'}}>
                <YearField />
                <ReleaseYearField />
                <GenreField data = {data}/>
				<AdultField/>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <SortField/>
				<SortDirectionField/>
              </Box>
            </Box>
			<Box sx={{pt: 1, display: "flex", gap: "20px",  flexWrap: "wrap"}}>
				<SubmitField/>
			</Box>
          </form>
        )}
      />
    </>
  );
};

export default Filters;
