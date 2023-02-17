import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import swal from 'sweetalert';

function AddModal({show, handleClose, AddData}) {

    const SendToBack = [
        {
            "title": "",
            "year": "",
            "time": "",
            "language": "",
            "date": "",
            "country": "",
            "director": [
             
            ],
            "genres": [
              
            ],
            "actor": [
               
            ]
        }
      ]

    const [sendToBackend, setSendToBackend] = useState(SendToBack);

    const [title, setTitle] = useState("");
    const handleSetTitle = (e) =>{setTitle(e.target.value)}

    const [lanzamiento, setlanzamiento] = useState("");
    const handleSetlanzamiento = (e) =>{setlanzamiento(e.target.value)}

    const [time, setTime] = useState("");
    const handleSetTime = (e) =>{setTime(e.target.value)}

    const [lenguage, setLenguage] = useState("");
    const handleSetLenguage = (e) =>{setLenguage(e.target.value)}

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const handleDay = (e) => {setDay(e.target.value)}
    const handleMonth = (e) => {setMonth(e.target.value)}
    const handleYear = (e) => {setYear(e.target.value)}
    const fullDate = day + "/" + month + "/" + year

    const [country, setCountry] = useState("");
    const handleSetCountry = (e) => {setCountry(e.target.value)}

    const [actorName, setActorName] = useState("");
    const handleSetActorName = (e) => {setActorName(e.target.value)}
    const [actorLName, setActorLName] = useState("");
    const handleSetActorLName = (e) => {setActorLName(e.target.value)}

    const [genre, setGenre] = useState("");
  
    const handleCaptGenre = (e) => {
      setGenre(e.target.value);
    };
    const handleAddGenre = () => {
        const updatedSendToBack = [...SendToBack]; // crea una copia del array SendToBack
        updatedSendToBack[0].genres = [...updatedSendToBack[0].genres, {kind: genre}]
      };

      const [directorName, setDirectorName] = useState("");
      const handleSetDirectorName = (e) => {setDirectorName(e.target.value)}
      const [directorLName, setDirectorLName] = useState("");
      const handleSetDirectorLName = (e) => {setDirectorLName(e.target.value)}


      //submit
      const handleSubmit = () =>{
        const updatedSendToBack = [...SendToBack];
        updatedSendToBack[0].title = title
        updatedSendToBack[0].year = lanzamiento
        updatedSendToBack[0].time = time
        updatedSendToBack[0].language = lenguage
        updatedSendToBack[0].date = fullDate
        updatedSendToBack[0].country = country
        updatedSendToBack[0].director.push({name: directorName, lastname: directorLName});
        updatedSendToBack[0].actor.push({name: actorName, lastname: actorLName});

        AddData(updatedSendToBack)
        handleClose()
      }

  return (
    <>
      
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Create new data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Movie Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleSetTitle}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                onChange={handleSetlanzamiento}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Duration</Form.Label>
              <Form.Control
                type="text"
                name="time"
                onChange={handleSetTime}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Lenguage</Form.Label>
              <Form.Control
                type="text"
                name="language"
                onChange={handleSetLenguage}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Date</Form.Label>
              <div id="Dates_inputs">
                <Form.Control className="Dates"
                    placeholder="Day"
                    type="number"
                    min="1" max="31" step="1"
                    onChange={handleDay}
                />
                <Form.Control className="Dates"
                    placeholder="Month"
                    type="number"
                    min="1" max="12" step="1"
                    onChange={handleMonth}
                />
                <Form.Control className="Dates"
                    placeholder="Year"
                    type="number"
                    min="1900" max="2025" step="1"
                    onChange={handleYear}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                onChange={handleSetCountry}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Genres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add new movie gender"
                onChange={handleCaptGenre}
              />
              <div className="add-butt">
                <Button onClick={handleAddGenre}>Add Genre</Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Actor</Form.Label>
              <div className="Actor-inputs">
                <Form.Control
                  type="text"
                  placeholder="Add new actor (name)"
                  onChange={handleSetActorName}
                />
                <Form.Control
                  type="text"
                  placeholder="Add new actor (lastname)"
                  onChange={handleSetActorLName}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Director Name</Form.Label>
              <Form.Control
                type="text"
                placeholder='Insert Director Name Here'
                onChange={handleSetDirectorName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Director Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder='Insert Director Lname Here'
                onChange={handleSetDirectorLName}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;