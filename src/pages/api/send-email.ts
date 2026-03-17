import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        const nombre = data.get('nombre');
        const email = data.get('email');
        const telefono = data.get('telefono');
        const mensaje = data.get('mensaje');
        const servicio = data.get('servicio');
        const empresa = data.get('empresa');
        console.log(nombre, email, telefono, mensaje, servicio, empresa);
        return new Response(JSON.stringify({
            success: true,
            message: `Usuario ${nombre} registrado.`
        }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            message: `Error al registrar usuario ${error}`
        }), { status: 500 });
    }
}