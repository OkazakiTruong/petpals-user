"use client";
import React, { useState } from "react";
import { Select, Space } from "antd";

export default function PetComponent({ item, pets, setPets, index }) {
  const [petName, setPetName] = useState("");
  const [petSpecies, setPetSpecies] = useState("");
  const [petType, setPetType] = useState("");
  const [petGender, setPetGender] = useState(true);
  const [petOld, setPetOld] = useState("");
  const [note, setNote] = useState("");

  const handlePetNameChange = (e) => {
    // setPetName(e.target.value);
    pets.map((pet, index) => {
      if (index === index) {
        pet.petName = e.target.value;
      }
      return pet;
    });
    console.log(pets);
    setPets(pets);
  };
  const handlePetSpeciesChange = (value) => {
    pets.map((pet, index) => {
      if (index === index) {
        pet.petName = e.target.value;
      }
      return pet;
    });
    setPets(pets);
  };
  const handlePetTypeChange = (e) => {
    setPetType(e.target.value);
  };
  const handlePetGenderChange = (e) => {
    setPetGender(e.target.value);
  };
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };
  const handlePetOld = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="pet-item">
      <h3>Thông tin thú cưng (Danh sách thứ {index}):</h3>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Tên thú cưng của bạn: </label>
          <input
            type="text"
            placeholder="Nhập tên thú cưng"
            onChange={handlePetNameChange}
          />
          <div className="error">{}</div>
        </div>
        <div className="input-group">
          <label htmlFor="">Chủng loại</label>
          <Select
            defaultValue="Chó"
            style={{
              width: "100%",
              height: "56px",
            }}
            onChange={handlePetSpeciesChange}
            options={[
              {
                value: "Chó",
                label: "Chó",
              },
              {
                value: "Mèo",
                label: "Mèo",
              },
              {
                value: "Thỏ",
                label: "Thỏ",
              },
              {
                value: "Khác",
                label: "Khác",
              },
            ]}
          />

          <div className="error">{}</div>
        </div>
      </div>
      <p>Giới tính</p>
      <div className="form-row">
        <div className="gender">
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value={true}
              onChange={handlePetGenderChange}
            />
            <label htmlFor="">Đực</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="female"
              value={false}
              onChange={handlePetGenderChange}
            />
            <label htmlFor="">Cái</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Tuổi: </label>
          <input
            type="text"
            placeholder="Không bắt buộc"
            onChange={handlePetOld}
          />
          <div className="error">{}</div>
        </div>
        <div className="input-group">
          <label htmlFor="">Giống loài: </label>
          <input
            type="text"
            placeholder="Không bắt buộc"
            onChange={handlePetTypeChange}
          />
          <div className="error">{}</div>
        </div>
      </div>
      <div className="form-row">
        <div className="note">
          <label htmlFor="">
            Triệu chứng ban đầu/ Lý do đặt lịch/ Ghi chú:
          </label>
          <textarea
            name=""
            id=""
            placeholder="Nhập nội dung ghi chú..."
            onChange={handleNoteChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
