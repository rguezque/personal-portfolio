
const data = {
    name: 'Luis Arturo Rodríguez',
    title: 'Jr. Web Developer',
    description: 'Desarrollador web, en proceso de aprendizaje con <b>NextJS</b>. Un poco de experiencia previa en PHP. He ejercido la docencia como profesor en dos universidades y tambi&eacute;n he estado en atención a clientes y ventas. Con entusiasmo de formar parte de un productivo y exitoso equipo. Aunque estuve alejado de la programación un tiempo, aprendo con rapidez nuevos conocimientos.'
}

export default function bio(req, res) {
    res.status(200).send(data)
}
