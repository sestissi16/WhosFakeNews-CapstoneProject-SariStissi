import React from 'react'
import { Form, InputGroup, Button, Col, DropdownButton, FormControl, Dropdown } from 'react-bootstrap'
// import { Button, Icon } from 'semantic-ui-react'
import Chip from '@material-ui/core/Chip';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './indexPastResults.css'


//to be able to choose the colors for the filter and keyword chips
const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#E0A0AD',
        // dark: will be calculated from palette.primary.main,
        contrastText: '#000000',
      },
      secondary: {
        main: '#B3B4BD',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#000000',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
});

const handleDelete = () => {
    console.log('delete this later')
};

const PastResults = () => (
    <div id="pastResultsPageContainer">
        <div id="pastResultsContent">
            <div id="pastResultsHeader">
                <h3 id="pastResultsHeaderMessage"><strong><em>Look at and search through the results of past fake news checks</em></strong></h3>
            </div>
            <div id="pastResultsBody">
                <div id="pastResultsBodyContent">
                    <div id="pastResultsSelection">
                        <h1>Past Results Control Panel</h1>
                        <div id="pastResultsSelectionContainer">
                            <div id="pastResultsFilterAndSearch">
                                <InputGroup id="pastResultsfilterGroup">
                                    <FormControl
                                    placeholder="Enter specific filter"
                                    aria-label="Specific filter entry"
                                    />
                                    <DropdownButton
                                        as={InputGroup.Append}
                                        variant="dark"
                                        title="Filter Type"
                                        id="pastResultsFilterDropdown"
                                    >
                                        <Dropdown.Item >Title</Dropdown.Item>
                                        <Dropdown.Item >Date</Dropdown.Item>
                                        <Dropdown.Item >Result</Dropdown.Item>
                                    </DropdownButton>
                                    <InputGroup.Append>
                                        <Button variant="danger">Filter</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <InputGroup id="pastResultssearchGroup">
                                    <Form.Control
                                        placeholder="Search"
                                        aria-label="Search for results"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="danger">Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                            <div id="pastResultsView">
                                <div id="pastResultsViewFilters">
                                    <div id="pastResultsViewActiveFilters">
                                        <div id="pastResultsVeiwFiltersTitle">
                                            <h6>Filters In Use:</h6>
                                        </div>
                                        <div id="pastResultsFilterChipsContainer">
                                            <div id="filter1-example" class="pastResultsFilterStyling">
                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        size="small"
                                                        label="Ex: Results: fake"
                                                        clickable
                                                        onDelete={handleDelete}
                                                        color="secondary"
                                                        // deleteIcon={<CloseIcon />}
                                                    />
                                                </ThemeProvider>
                                            </div>
                                            <div id="filter2-example" class="pastResultsFilterStyling">
                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        size="small"
                                                        label="Ex: Date: 2020"
                                                        clickable
                                                        onDelete={handleDelete}
                                                        color="secondary"
                                                        // deleteIcon={<CloseIcon />}
                                                    />
                                                </ThemeProvider>
                                            </div>
                                            <div id="filter3-example" class="pastResultsFilterStyling">
                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        size="small"
                                                        label="Ex: Title: 2020 Election"
                                                        clickable
                                                        onDelete={handleDelete}
                                                        color="secondary"
                                                        // deleteIcon={<CloseIcon />}
                                                    />
                                                </ThemeProvider>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div id="viewFiltersButtonGroup">
                                        <Button variant="danger" id="pastResultsFiltersClear">Clear Filters</Button> 
                                    </div>
                                </div>
                                <div id="pastResultsViewCards">
                                    <div id="viewPastResultsDisplayCard-1" class="viewPastResultsDisplayCard">
                                        <div id="displayCardTopRow-1" class="displayCardTopRow">
                                            <div id="displayCardTitle-1" class="displayCardTitle">
                                                <h5>Article Title 1</h5>
                                            </div>
                                            <div id="displayCardResult-1" class="displayCardResult">
                                                <h5>Fake</h5>
                                            </div>
                                            <div id="displayCardDate-1" class="displayCardDate">
                                                <h6>4-20-2020</h6>
                                            </div>
                                        </div>
                                        <div id="displayCardBottomRow-1" class="displayCardBottomRow">
                                            <div id="displayCardDetails-1" class="displayCardDetails">
                                                <p>Placeholder text for details from fake news check.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="viewPastResultsDisplayCard-2" class="viewPastResultsDisplayCard">
                                        <div id="displayCardTopRow-2" class="displayCardTopRow">
                                            <div id="displayCardTitle-2" class="displayCardTitle">
                                                <h5>Photo Title 2</h5>
                                            </div>
                                            <div id="displayCardResult-2" class="displayCardResult">
                                                <h5>Real</h5>
                                            </div>
                                            <div id="displayCardDate-2" class="displayCardDate">
                                                <h6>4-15-2020</h6>
                                            </div>
                                        </div>
                                        <div id="displayCardBottomRow-2" class="displayCardBottomRow">
                                            <div id="displayCardDetails-2" class="displayCardDetails">
                                                <p>Placeholder text for details from fake news check.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="viewPastResultsDisplayCard-3" class="viewPastResultsDisplayCard">
                                        <div id="displayCardTopRow-3" class="displayCardTopRow">
                                            <div id="displayCardTitle-3" class="displayCardTitle">
                                                <h5>Article Title 3</h5>
                                            </div>
                                            <div id="displayCardResult-3" class="displayCardResult">
                                                <h5>Real</h5>
                                            </div>
                                            <div id="displayCardDate-3" class="displayCardDate">
                                                <h6>4-14-2020</h6>
                                            </div>
                                        </div>
                                        <div id="displayCardBottomRow-3" class="displayCardBottomRow">
                                            <div id="displayCardDetails-3" class="displayCardDetails">
                                                <p>Placeholder text for details from fake news check.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="viewPastResultsDisplayCard-4" class="viewPastResultsDisplayCard">
                                        <div id="displayCardTopRow-4" class="displayCardTopRow">
                                            <div id="displayCardTitle-4" class="displayCardTitle">
                                                <h5>Video Title 4</h5>
                                            </div>
                                            <div id="displayCardResult-4" class="displayCardResult">
                                                <h5>Fake</h5>
                                            </div>
                                            <div id="displayCardDate-4" class="displayCardDate">
                                                <h6>4-10-2020</h6>
                                            </div>
                                        </div>
                                        <div id="displayCardBottomRow-4" class="displayCardBottomRow">
                                            <div id="displayCardDetails-4" class="displayCardDetails">
                                                <p>Placeholder text for details from fake news check.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="viewPastResultsDisplayCard-5" class="viewPastResultsDisplayCard">
                                        <div id="displayCardTopRow-5" class="displayCardTopRow">
                                            <div id="displayCardTitle-5" class="displayCardTitle">
                                                <h5>Article Title 5</h5>
                                            </div>
                                            <div id="displayCardResult-5" class="displayCardResult">
                                                <h5>Fake</h5>
                                            </div>
                                            <div id="displayCardDate-5" class="displayCardDate">
                                                <h6>3-31-2020</h6>
                                            </div>
                                        </div>
                                        <div id="displayCardBottomRow-5" class="displayCardBottomRow">
                                            <div id="displayCardDetails-5" class="displayCardDetails">
                                                <p>Placeholder text for details from fake news check.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="viewPastResultsDisplayCard-6" class="viewPastResultsDisplayCard">
                                        <div id="displayCardTopRow-6" class="displayCardTopRow">
                                            <div id="displayCardTitle-6" class="displayCardTitle">
                                                <h5>Video Title 6</h5>
                                            </div>
                                            <div id="displayCardResult-6" class="displayCardResult">
                                                <h5>Real</h5>
                                            </div>
                                            <div id="displayCardDate-6" class="displayCardDate">
                                                <h6>3-25-2020</h6>
                                            </div>
                                        </div>
                                        <div id="displayCardBottomRow-6" class="displayCardBottomRow">
                                            <div id="displayCardDetails-6" class="displayCardDetails">
                                                <p>Placeholder text for details from fake news check.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default PastResults