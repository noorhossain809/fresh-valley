import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Admin = () => {
    const [imageURL, setImageURL] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      const eventData = {
          name: data.name,
          price: data.price,
          weight: data.weight,
          imageURL: imageURL,
      }
     
      fetch('http://localhost:5000/addProduct', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(eventData)
      })
      .then(res => res.json())
      .then(data => console.log(data))

  };

  const handleImageUpload = (e) => {
      const imageData = new FormData()
      imageData.set('key', '332dd0825bd58ba6b098f5fefceccc2b')
      imageData.append('image', e.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="mt-5">
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Enter name" {...register("name")} />
          <br />
          <input placeholder="Enter name" {...register("weight")} />
          <br />
          <input placeholder="Enter price" {...register("price")} />
          <br />
          <input name="Upload photo" type="file" onChange={handleImageUpload}/>

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default Admin;
