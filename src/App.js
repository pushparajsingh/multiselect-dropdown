import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ImageCross from './image_close.png';
import Search from './search.png';
import { Box, Button, TextField } from '@material-ui/core';
import { styled } from '@mui/system';
import AddItem from './image_.png';
import deleteMember from './deleteMember.png';

const styles = (theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width: '616px',
    height: 'fit-content',
    padding: '32px',
    gap: '24px',
    borderRadius: '16px',
    opacity: '0px',
  },
});

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#FCFDFE',
    borderRadius: '8px',
    color: '#94A3B8',
    fontFamily: 'Poppins',
  },
  '& .MuiInputBase-input': {
    padding: '12px 16px',
    fontSize: '16px',
    minWidth: '165px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderStyle: 'none',
  },
  '& .MuiInputBase-input': {
    padding: '12px 5px',
  },
  '& .Mui-focused .MuiInputLabel-root': {},
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#CBD5E1',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {},
}));

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      memberList: [
        { id: 0, name: 'Matt Taylor', email: 'pushparaj@gmail.com' },
        {
          id: 1,
          name: 'Matt Taylor',
          email: 'pushparaj234@gmail.com',
        },
        {
          id: 2,
          name: 'Ankush Taylor',
          email: 'pushparaj234@gmail.com',
        },
        {
          id: 3,
          name: 'Amit Taylor',
          email: 'pushparaj57@gmail.com',
        },
        {
          id: 4,
          name: 'Aman Taylor',
          email: 'pushparaj49@gmail.com',
        },
        {
          id: 5,
          name: 'Raj Taylor',
          email: 'pushparaj671@gmail.com',
        },
        {
          id: 6,
          name: 'Karan Taylor',
          email: 'pushparaj111@gmail.com',
        },
        {
          id: 7,
          name: 'Mohit Taylor',
          email: 'pushpara113@gmail.com',
        },
      ],
      addMemberList: [],
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  addMember = (item) => {
    this.setState({
      addMemberList: [...this.state.addMemberList, item],
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <style>
          {`
         .scrollbar-css{
          height:310px;
          overflow:auto;
          padding-right: 12px;
          }
          
          .scrollbar-css::-webkit-scrollbar{
              width:6px;
              background-color:#F1F5F9;
              }
              
          .scrollbar-css::-webkit-scrollbar-thumb{
            background:#CBD5E1;
            border-radius:10px;
          }
        `}
        </style>
        <button type="button" onClick={this.handleOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontfamily: 'Poppins',
            }}
            className={classes.paper}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <Box>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '32px',
                  }}
                >
                  <h6
                    id="simple-modal-title"
                    style={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 700,
                      lineHeight: '32px',
                      letterSpacing: '-0.005em',
                      margin: '0px',
                      color: '#0F172A',
                    }}
                  >
                    Add Members to Your Team
                  </h6>
                  <img
                    src={ImageCross}
                    width={'20px'}
                    height={'20px'}
                  />
                </Box>
                <Box
                  style={{
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Poppins',
                      lineHeight: '24px',
                      color: '#1E293B',
                      margin: '0px',
                    }}
                  >
                    Add team members by entering their email addresses
                    below.
                  </p>
                </Box>
              </Box>
              <Box>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #CBD5E1',
                      width: '100%',
                      borderRadius: '8px',
                      paddingLeft: '8px',
                      backgroundColor: '#FCFDFE',
                    }}
                  >
                    <img
                      src={Search}
                      width={'24px'}
                      height={'24px'}
                    />
                    <Box
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        minHeight: '44px',
                        maxHeight: '52px',
                        overflowY: 'auto',
                        marginTop: '10px',
                        gap: '8px',
                      }}
                    >
                      {this.state.addMemberList.map((item) => {
                        return (
                          <div
                            style={{
                              height: '32pxpx',
                              padding: '6px 8px 6px 12px',
                              borderRadius: '26px',
                              whiteSpace: 'nowrap',
                              backgroundColor: '#E0EDF0',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontFamily: 'Poppins',
                              fontSize: '14px',
                              color: '#325962',
                              lineHeight: '22px',
                            }}
                          >
                            {item.name}
                            <img
                              src={deleteMember}
                              style={{ marginLeft: '4px' }}
                            />
                          </div>
                        );
                      })}
                      <CustomTextField
                        variant="outlined"
                        fullWidth
                        placeholder="Search and add members"
                      />
                    </Box>
                  </Box>
                  <Button
                    style={{
                      backgroundColor: '#237182',
                      color: 'white',
                      width: '66px',
                      height: '44px',
                      borderRadius: '8px',
                      textTransform: 'capitalize',
                      fontWeight: 600,
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
              <Box className="scrollbar-css">
                {this.state.memberList.map((item) => (
                  <Box
                    style={{
                      paddingTop: '8px',
                      paddingBottom: '8px',
                    }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Box
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '100px',
                          backgroundColor: '#D3E4E9',
                          border: '2px solid #E0EDF0',
                          display: 'flex',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '18px',
                            fontWeight: 700,
                            color: '#ABCDD5',
                          }}
                        >
                          PA
                        </p>
                      </Box>
                      <Box style={{ width: '100%' }}>
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            lineHeight: '24px',
                            color: '#0F172A',
                            margin: '0px',
                          }}
                        >
                          {item.name}
                        </p>
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '22px',
                            color: '#64748B',
                            margin: '0px',
                          }}
                        >
                          {item.email}
                        </p>
                      </Box>
                      <Box>
                        <img
                          src={AddItem}
                          width={'20px'}
                          height={'20px'}
                          onClick={() => {
                            this.addMember(item);
                          }}
                          style={{
                            marginTop: '5px',
                            cursor: 'pointer',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleModal);
