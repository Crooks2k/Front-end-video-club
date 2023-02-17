import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import swal from 'sweetalert';

function EditModal({show, handleClose, item, setMovieData, editTable}) {

    const [value, setValue] = useState(item);

    const handleChange = (event) => {
        const { name, value } = event.target; //name stores
        setValue(prevValue => ({ ...prevValue, [name]: value }));
    };

    //pre submit function
    const preSubmit = () =>{
      swal({
        title: "Estas seguro de realizar estos cambias?",
        text: "Una vez realizados, no hay vuelta atras!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Los cambios se realizaron exitosamente", {
            icon: "success",
          });
          handleSubmit()
        } else {
          swal("Cancelaste la edicion");
        }
      });
    }

    // Submit function (add values, send backend, clear states)
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
        if (directorName.trim() !== "" && directorLastName.trim() !== "") {
          item.director = [{...item.director, name: directorName, lastname: directorLastName}]
        }

        //Add Actor
        item.actor = [...item.actor, {name: actorName, lastname: actorLastName}]

        //Conditions
        if ( day === "" && month === "" && year === ""){
          item.date = value.date
        }

        //send changes to backend
       
        editTable(item._id, item)

        //clear states
        setDay(""), setMonth(""), setYear(""), setDirectorName(""), setDirectorLastName(""), setNewGenderObj("")

        // Close modal
        handleClose()
    };

    // const editTodo = async (id, item) => {
    //   await movies.put(`App/movies/${id}`, {item});
    //   setMovieData((oldList) => [...oldList, item])
    // };

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

    //Add new genres
     const [newGenderObj, setNewGenderObj] = useState("");

     const handleNewGender = (e) => {
      setNewGenderObj(e.target.value)
    }
    const handleSetGender = () =>{
       item.genres = [...item.genres, {kind: newGenderObj, _id: newGenderObj}]
    }

    //Add new actors
    const [actorName, setActorName] = useState("");
    const [actorLastName, setActorLastName] = useState("");

    const handleActorName = (e) => {
        setActorName(e.target.value)
    }
    const handleActorLastName = (e) => {
        setActorLastName(e.target.value)
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
              <Form.Label className="form__titles">Year</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.year}
                name="year"
                value={value.year}
                onChange={handleChange}
    
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.time}
                name="time"
                value={value.time}
                onChange={handleChange}
    
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Lenguage</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.language}
                name="language"
                value={value.language}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Date</Form.Label>
              <div id="Dates_inputs">
                <Form.Control className="Dates"
                    placeholder="Day"
                    onChange={handleDay}
                    type="number"
                    min="1" max="31" step="1"
                />
                <Form.Control className="Dates"
                    placeholder="Month"
                    onChange={handleMonth}
                    type="number"
                    min="1" max="12" step="1"
                />
                <Form.Control className="Dates"
                    placeholder="Year"
                    onChange={handleYear}
                    type="number"
                    min="1900" max="2025" step="1"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Country</Form.Label>
              <Form.Control
                type="text"
                placeholder={item.country}
                name="country"
                value={value.country}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Genres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add new movie gender"
                onChange={handleNewGender}
              />
              <div className="add-butt">
                <DropdownButton id="genres_dropdown" title="List of added genres">
                  {
                      item.genres.map((genre, index) => {
                          return (
                            <Dropdown.Item key={genre._id} id={index+1}>{genre.kind}</Dropdown.Item>
                          )
                      })
                  }
                </DropdownButton>
                <Button onClick={handleSetGender}>Add Genre</Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Actor</Form.Label>
              <div className="Actor-inputs">
                <Form.Control
                  type="text"
                  placeholder="Add new actor (name)"
                  onChange={handleActorName}
                />
                <Form.Control
                  type="text"
                  placeholder="Add new actor (lastname)"
                  onChange={handleActorLastName}
                />
              </div>
              <DropdownButton id="genres_dropdown" title="List of added actors">
                {
                    item.actor.map((act,act_index = "a") =>{
                        return(
                            <Dropdown.Item key={act._id} id={act_index+1}>{act.name} {act.lastname}</Dropdown.Item>
                        )
                    })
                }
                </DropdownButton>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Director Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={
                    item.director.map(direct =>{
                        return(
                            direct.name
                        )
                    })
                }
                value={item.director.name}
                onChange={handleDicName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="form__titles">Director Last Name</Form.Label>
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
          <Button variant="primary" onClick={preSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;