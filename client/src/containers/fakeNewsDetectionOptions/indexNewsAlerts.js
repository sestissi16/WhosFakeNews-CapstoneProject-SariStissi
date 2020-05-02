import React from 'react'
import { Form, InputGroup, Button, Col, DropdownButton, FormControl, Dropdown } from 'react-bootstrap'
// import { Button, Icon } from 'semantic-ui-react'
import { IconButton, Icon } from "@chakra-ui/core";
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { TiPlus } from 'react-icons/ti';
import './indexNewsAlerts.css'

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

// const primaryLight = theme.palette.primary.light;
// const primaryDark = theme.palette.primary.dark;

const handleDelete = () => {
    console.log('delete this later')
};

const NewsAlerts = () => (
    <div id="newsAlertsPageContainer">
        <div id="newsAlertsContent">
            <div id="newsAlertsHeader">
                <h3><strong><em>Get News Alerts with Fake News Results even when you're away!</em></strong></h3>
            </div>
            <div id="newsAlertsBody">
                <div id="newsAlertsInfo">
                    <h2 id="newsAlertsInfoTitle">How does this work?</h2>
                    <ol id="newsAlertsInfoList">
                        <li class="newAlertsInfoListItems">
                            Sign in and navigate back to this page. (If you're already signed in, go to the next step)
                        </li>
                        <li class="newAlertsInfoListItems">
                            Choose what topics, people, or events you want to find news about.
                            Those topics, events, or people are keywords.
                        </li>
                        <li class="newAlertsInfoListItems">
                            Add those keywords you came up with in step 2 below and click on save.
                        </li>
                        <li class="newAlertsInfoListItems">
                            We will email you when we find something that relates to the words you added and have checked it for fake news.
                        </li>
                    </ol>
                </div>
                {/* Have the section below only show up if the user is signed in, have a different div made in the future that explains that they need to sign up to see this */}
                <div id="newsAlertsSelection">
                    <h1>News Alerts Control Panel</h1>
                    <div id="newsAlertsSelectionContainer">
                        <div id="newsAlertsAddAndSearch">
                            <InputGroup id="addInputGroup">
                                <FormControl
                                    placeholder="Add keyword"
                                    aria-label="Add keyword"
                                />
                                <InputGroup.Append>
                                    <Button variant="danger"><TiPlus /> Add</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <InputGroup id="filterInputGroup">
                                <FormControl
                                placeholder="Enter specific filter"
                                aria-label="Specific filter entry"
                                />
                                <DropdownButton
                                    as={InputGroup.Append}
                                    variant="dark"
                                    title="Filter Type"
                                    id="newsAlertsFilterDropdown"
                                >
                                    <Dropdown.Item >Title</Dropdown.Item>
                                    <Dropdown.Item >Date</Dropdown.Item>
                                    <Dropdown.Item >Result</Dropdown.Item>
                                </DropdownButton>
                                <InputGroup.Append>
                                    <Button variant="danger">Filter</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <InputGroup id="searchInputGroup">
                                <Form.Control
                                    placeholder="Search"
                                    aria-label="Search for results"
                                />
                                <InputGroup.Append>
                                    <Button variant="danger">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        <div id="newsAlertsView">
                            <div id="newsAlertsViewKeywords">
                                <div id="viewSelected">
                                    <div id="viewActiveFilters">
                                        <div id="veiwFiltersTitle">
                                            <h6>Filters In Use:</h6>
                                        </div>
                                        <div id="filterChipsContainer">
                                            <div id="filter1-example" class="filterStyling">
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
                                            <div id="filter2-example" class="filterStyling">
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
                                        </div>
                                        
                                    </div>
                                    <div id="viewSelectedKeywords">
                                        <div id="veiwKeywordsTitle">
                                            <h6>Keywords saved:</h6>
                                        </div>
                                        <div id="keywordChipsContainer">
                                            <div id="keyword1-example" class="keywordStyling">
                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        size="small"
                                                        label="Ex: 2020 election"
                                                        clickable
                                                        onDelete={handleDelete}
                                                        color="primary"
                                                        // deleteIcon={<CloseIcon />}
                                                    />
                                                </ThemeProvider>
                                            </div>
                                            <div id="keyword2-example" class="keywordStyling">
                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        size="small"
                                                        label="Ex: Earlham College"
                                                        clickable
                                                        onDelete={handleDelete}
                                                        color="primary"
                                                        // deleteIcon={<CloseIcon />}
                                                    />
                                                </ThemeProvider>
                                            </div>
                                            <div id="keyword3-example" class="keywordStyling">
                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        size="small"
                                                        label="Ex: Lynn Gunn"
                                                        clickable
                                                        onDelete={handleDelete}
                                                        color="primary"
                                                        // deleteIcon={<CloseIcon />}
                                                    />
                                                </ThemeProvider>
                                            </div>
                                            <div id="keyword4-example" class="keywordStyling">
                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        size="small"
                                                        label="Ex: Grammy Awards"
                                                        clickable
                                                        onDelete={handleDelete}
                                                        color="primary"
                                                        // deleteIcon={<CloseIcon />}
                                                    />
                                                </ThemeProvider>
                                            </div>
                                            <div id="keyword5-example" class="keywordStyling">
                                                <ThemeProvider theme={theme}>
                                                    <Chip
                                                        size="small"
                                                        label="Ex: Cooking"
                                                        clickable
                                                        onDelete={handleDelete}
                                                        color="primary"
                                                        // deleteIcon={<CloseIcon />}
                                                    />
                                                </ThemeProvider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="viewKeywordsButtonGroup">
                                    <Button variant="danger" id="keywordsClear">Clear Keywords</Button> 
                                    <Button variant="danger" id="filtersClear">Clear Filters</Button> 
                                </div>
                            </div>
                            <div id="newsAlertsViewResults">
                                <div id="viewResultsDisplayCard-1" class="viewResultsDisplayCard">
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
                                <div id="viewResultsDisplayCard-2" class="viewResultsDisplayCard">
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
                                <div id="viewResultsDisplayCard-3" class="viewResultsDisplayCard">
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
                                <div id="viewResultsDisplayCard-4" class="viewResultsDisplayCard">
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
                                <div id="viewResultsDisplayCard-5" class="viewResultsDisplayCard">
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
                                <div id="viewResultsDisplayCard-6" class="viewResultsDisplayCard">
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
                    <div id="newsAlertsNotifyMethod">
                        <p>
                            Placeholder for where you can choose how you want to be notified. 
                            The default is email because that's what users use to sign up
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default NewsAlerts