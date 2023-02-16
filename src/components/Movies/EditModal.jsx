import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function EditModal({show, handleClose, item, setMovieData}) {

    const [value, setValue] = useState(item);

    const handleChange = (event) => {
        const { name, value } = event.target; //name stores
        setValue(prevValue => ({ ...prevValue, [name]: value }));
    };

    const handleSubmit = () => {
        // Updated values in `item`
        item.title = value.title;
        item.year = value.year;
        item.time = value.time;
        item.language = value.language;
        item.country = value.country;

        // Add Dates
        let fullDate = day + "/" + month + "/" + year
        item.date = fullDate
        
        // Add Director new Data
        const newDirector = [
            {
              "name": directorName,
              "lastname": directorLastName,
              "_id": item.director._id
            }
        ]
        item.director = newDirector

        // Close modal
        handleClose();
    };

    //Date State
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const handleDay = (e) => {
        setDay(e.target.value)
    }
    const handleMonth = (e) => {
        setMonth(e.target.value)
    }
    const handleYear = (e) => {
        setYear(e.target.value)
    }

    //Director Data State
    const [directorName, setDirectorName] = useState("");
    const [directorLastName, setDirectorLastName] = useState("");

    const handleDicName = (e) => {
        setDirectorName(e.target.value)
    }
    const handleDicLastName = (e) => {
        setDirectorLastName(e.target.value)
    }

  return (
    <>
      

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.title}
                name="title"
                value={value.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.year}
                name="year"
                value={value.year}
                onChange={handleChange}
    
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.time}
                name="time"
                value={value.time}
                onChange={handleChange}
    
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lenguage</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.language}
                name="language"
                value={value.language}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <div id="Dates_inputs">
                <Form.Control className="Dates"
                    type="t"
                    placeholder="Day"
                    onChange={handleDay}
                />
                <Form.Control className="Dates"
                    type="t"
                    placeholder="Month"
                    onChange={handleMonth}
                />
                <Form.Control className="Dates"
                    type="t"
                    placeholder="Year"
                    onChange={handleYear}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.country}
                name="country"
                value={value.country}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Genres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add new movie gender"
    
              />
              <DropdownButton id="genres_dropdown" title="List of added genres">
                {
                    item.genres.map((genre, index) => {
                        return (
                          <Dropdown.Item key={genre._id} id={index+1}>{genre.kind}</Dropdown.Item>
                        )
                    })
                }
              </DropdownButton>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Actor</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add new actor"
    
              />
              <DropdownButton id="genres_dropdown" title="List of added actors">
                {
                    item.actor.map((act,act_index = "a") =>{
                        return(
                            <Dropdown.Item key={act._id} id={act_index+1}>{act.name}</Dropdown.Item>
                        )
                    })
                }
                </DropdownButton>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Director Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={
                    item.director.map(direct =>{
                        return(
                            direct.name
                        )
                    })
                }
                onChange={handleDicName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Director Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={
                    item.director.map(direct =>{
                        return(
                            direct.lastname
                        )
                    })
                }
                onChange={handleDicLastName}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;