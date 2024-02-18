// api.js

const BASE_URL = 'http://localhost:3000'; // API adresiniz

// ./api/index.js

export const createUser = async (userData) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  };
  

export const updateUser = async (email, updatedUserData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUserData)
    });
    if (!response.ok) {
      throw new Error('Kullanıcı güncelleme hatası');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${email}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Kullanıcı silme hatası');
    }
    return email;
  } catch (error) {
    throw error;
  }
};

// Diğer CRUD işlemleri için gerekli API çağrılarını buraya ekleyebilirsiniz
