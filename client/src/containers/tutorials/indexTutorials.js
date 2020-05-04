import React from 'react'
import { Icon, Image, Item, Label } from 'semantic-ui-react'
import { Form, InputGroup, Button, ButtonGroup, DropdownButton, FormControl, Dropdown } from 'react-bootstrap'
import Chip from '@material-ui/core/Chip';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './indexTutorials.css'

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

const Tutorials = () => (
    <div id="tutorialsPageContainer">
        <div id="tutorialsContent">
            <div id="tutorialsHeader">
                <h3 id="tutorialsHeaderMessage"><strong><em>
                    Here's where we'll post tutorials to help you navigate the site!
                </em></strong></h3>
            </div>
            <div id="tutorialsBody">
                <div id="tutorialsBodyContent">
                    <div id="tutorialsBodyFilterBar">
                        <InputGroup id="tutorialsFilterGroup">
                            <FormControl
                            placeholder="Search for specific tutorials"
                            aria-label="Specific filter entry"
                            />
                            <DropdownButton
                                as={InputGroup.Append}
                                variant="dark"
                                title="Filter Type"
                                id="tutorialsFilterDropdown"
                            >
                                <Dropdown.Item >Title</Dropdown.Item>
                                <Dropdown.Item >Topic</Dropdown.Item>
                            </DropdownButton>
                            <InputGroup.Append>
                                <Button variant="danger">Filter</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <div id="tutorialsViewActiveFilters">
                        <div id="tutorialsVeiwFiltersTitle">
                            <h6>Filters In Use:</h6>
                        </div>
                        <div id="tutorialsFilterChipsContainer">
                            <div class="tutorialsFilterStyling">
                                <ThemeProvider theme={theme}>
                                    <Chip
                                        label="Ex: Topic: news alerts"
                                        clickable
                                        onDelete={handleDelete}
                                        color="secondary"
                                        // deleteIcon={<CloseIcon />}
                                    />
                                </ThemeProvider>
                            </div>
                            <div class="tutorialsFilterStyling">
                                <ThemeProvider theme={theme}>
                                    <Chip
                                        label="Ex: Topic: extension"
                                        clickable
                                        onDelete={handleDelete}
                                        color="secondary"
                                        // deleteIcon={<CloseIcon />}
                                    />
                                </ThemeProvider>
                            </div>
                            <div class="tutorialsFilterStyling">
                                <ThemeProvider theme={theme}>
                                    <Chip
                                        label="Ex: Title: search"
                                        clickable
                                        onDelete={handleDelete}
                                        color="secondary"
                                        // deleteIcon={<CloseIcon />}
                                    />
                                </ThemeProvider>
                            </div>
                        </div> 
                    </div>
                    <div id="tutorialsBodyList">
                        <Item.Group divided>
                            <Item>
                                <Item.Image src='https://fakeimg.pl/400/3E5C76/fff/?text=Placeholder' alt="placeholder image that says placeholder"/>

                                <Item.Content>
                                    <Item.Header as='a'>How to setup News Alerts</Item.Header>
                                    <Item.Meta>
                                        <span className='tutorial'>
                                            Click on the Title to go to the Tutorial. 
                                            Click on the tags at the button to go to the part of the website the tutorial is talking about.
                                        </span>
                                    </Item.Meta>
                                    <Item.Description>
                                        Here we'll have a video with captions about how to set up News Alerts.
                                        There will also be a text version with images in case you can't view the video!
                                    </Item.Description>
                                    <Item.Extra>
                                        <Label href="/Options/NewsAlerts">News Alerts Tab</Label>
                                        <Label icon='globe' content='Additional Languages' />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>

                            <Item>
                                <Item.Image src='https://fakeimg.pl/400/3E5C76/fff/?text=Placeholder' alt="placeholder image that says placeholder"/>

                                <Item.Content>
                                    <Item.Header as='a'>How does the Extension Work</Item.Header>
                                    <Item.Meta>
                                        <span className='tutorial'>
                                            Click on the Title to go to the Tutorial. 
                                            Click on the tags at the button to go to the part of the website the tutorial is talking about.
                                        </span>
                                    </Item.Meta>
                                    <Item.Description>
                                        Here we'll explain what the extension can check and what it has access to.
                                        There will be a video with captions or a text version with images to help us explain it!
                                    </Item.Description>
                                    <Item.Extra>
                                        <Label href="/Options/Extension">Extension Tab</Label>
                                        <Label icon='globe' content='Additional Languages' />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>

                            <Item>
                                <Item.Image src='https://fakeimg.pl/400/3E5C76/fff/?text=Placeholder' alt="placeholder image that says placeholder" />

                                <Item.Content>
                                    <Item.Header as='a'>How can you search and filter through lists</Item.Header>
                                    <Item.Meta>
                                        <span className='tutorial'>
                                            Click on the Title to go to the Tutorial. 
                                            Click on the tags at the button to go to the part of the website the tutorial is talking about.
                                        </span>
                                    </Item.Meta>
                                    <Item.Description>
                                        Here we'll show you want you can do with the filter bar in the News Alerts Tab, Detection Results Tab, and Tutorials Tab.
                                        There will be a video with captions and a text version with images to help us explain.
                                    </Item.Description>
                                    <Item.Extra>
                                        <Label href="/PastResults">Past Results Tab</Label>
                                        <Label href="/Options/NewsAlerts">News Alerts Tab</Label>
                                        <Label href="/Resources/Tutorial">Tutorials Tab</Label>
                                        <Label icon='globe' content='Additional Languages' />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Tutorials