import Header from "../components/Header";
import Steps from "../components/Steps";
import { useForm } from "react-hook-form";
import { Ad }  from "../types/ad";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function PostAdImg() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userId = localStorage.getItem("userId");
    const ad = JSON.parse(localStorage.getItem("ad") || "{}");

    const adNew: Ad = {
      tipo: ad.tipo,
      nombre: ad.nombre,
      descripcion: ad.descripcion,
      imagenes: ad.imagenes,
      calle: ad.calle,
      ciudad: ad.ciudad,
      busqueda: "",
      precio: ad.precio,
      m2: ad.metros,
      planta: "",
      habitaciones: ad.habitaciones,
      baños: ad.baños,
      caracteristicas: {
        tipoInmueble: ad.caracteristicas.tipoInmueble,
      },
      extra: [""],
      inmobiliaria: "",
      imagenInmobiliaria: "",
      telefono: "",
      email: "",
    };

    const formData = new FormData();
    for (const key in adNew) {
      if(key === 'caracteristicas') {
        formData.append(key, JSON.stringify(adNew[key]));
      }else{
        formData.append(key, adNew[key]);
      }
    }
    formData.append('userId', userId);
    const imageFile1 = document.querySelector('#img1').files[0];
    const imageFile2 = document.querySelector('#img2').files[0];
    const imageFile = [imageFile1, imageFile2];
    imageFile.forEach((file) => {
      formData.append('imagenes', file);
    });

    fetch("http://localhost:3001/api/anuncios/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => navigate("/mis-anuncios"))
      .then((data) => {
        toast.success("Anuncio publicado correctamente");
        localStorage.removeItem("ad")
      });
  }
  return (
    <>
      <Header />
      <Steps step="3" />
      <h2 className="text-2xl font-bold mt-8 mx-2">
        Sube las fotos de tu anuncio
      </h2>
      <p className="mx-2 mt-6 mb-6">
        Añade fotos de tu inmueble para que los usuarios puedan verlo mejor. Puedes
        subir hasta 4 fotos.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2">
            <label
              htmlFor={`photo\${i}`}
              className="block text-sm font-medium text-gray-700"
            >
              Foto {i}
            </label>
            <input
              {...register(`imagenes`)}
              type="file"
              accept="image/*"
              id={`img${i}`}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Subir fotos
        </button>
      </form>
    </>
  );
}

export default PostAdImg;
