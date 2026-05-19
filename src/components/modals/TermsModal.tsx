interface TermsModalProps {
    visible: boolean;
    onClose: (accepted: boolean) => void;
}

export default function TermsModal({
    visible,
    onClose,
}: TermsModalProps) {

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50">
        
        <div className="bg-[#fbf3f3] w-full max-w-4xl rounded-3xl p-8 max-h-[90vh] flex flex-col shadow-2xl">

            {/* Título */}
            <h2 className="text-3xl font-black text-[#B96A4A] text-center mb-6">
            Términos y Condiciones
            </h2>

            {/* Contenido */}
            <div className="bg-[#e7e5db] rounded-2xl p-6 overflow-y-auto flex-1">

            <div className="space-y-6 text-gray-700 leading-8">

                <div>
                <h3 className="text-2xl font-black text-[#B96A4A] mb-2">
                    🎨 Bienvenido a Artemanía
                </h3>

                <p>
                    Artemanía es una plataforma destinada a la compra,
                    venta y aprendizaje artesanal.
                </p>
                </div>

                <div>
                <h4 className="font-bold text-lg mb-2">
                    1. Aceptación de los términos
                </h4>

                <p>
                    Al crear una cuenta o utilizar la plataforma, aceptas cumplir estos{' '}
                    <strong className="font-bold">Términos y Condiciones</strong> y nuestra{' '}
                    <strong className="font-bold">Política de Privacidad</strong>.
                    El uso continuo de Artemanía constituye una aceptación legal y vinculante de todas las normas aquí descritas.

                    <br />
                    <br />
                </p>
    
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        2. Naturaleza de la plataforma
                    </h4>

                    <p>
                        Artemanía es un{' '}
                        <strong className="font-bold">marketplace comunitario</strong> y una{' '}
                        <strong className="font-bold">red social artística</strong> diseñada para conectar artesanos, artistas y compradores.
                        <br />
                        <br />
                        <strong className="font-bold" style={{ color: '#B96b4d' }}>⚠️ Importante:</strong><strong>{' '}
                        </strong>
                        <br />
                        Artemanía actúa únicamente como intermediario digital entre usuarios.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        3. Tipos de usuarios
                    </h4>

                    <p>
                        <strong className="font-bold" style={{ color: '#B96b4d' }}>👨‍🎨 Artesanos</strong>
                        <br />
                        • Crear tiendas virtuales.
                        <br />
                        • Publicar productos y obras.
                        <br />
                        • Gestionar ventas y estadísticas.
                        <br />
                        • Compartir tutoriales y clases.
                        <br />
                    </p>
                    <p>
                        <strong className="font-bold" style={{ color: '#B96b4d' }}>🛍️ Clientes</strong>
                        <br />
                        • Explorar productos.
                        <br />
                        • Comprar y guardar favoritos.
                        <br />
                        • Seguir artistas.
                        <br />
                        • Publicar reseñas y comentarios.
                        <br />
                    </p>
                    <p>
                        <strong className="font-bold" style={{ color: '#B96b4d' }}>🛡️ Administradores</strong>
                        <br />
                        • Moderar contenido.
                        <br />
                        • Revisar reportes.
                        <br />
                        • Suspender cuentas que incumplan las normas.
                        <br />
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        4. Normas de la comunidad
                    </h4>
                    Te comprometes a utilizar Artemanía de forma{' '}
                    <strong className="font-bold">ética, respetuosa y legal.</strong>
                    <br /> 
                    <br />   
                    <p>
                        <strong className="font-bold" style={{ color: '#ff6b6b' }}>
                            🚫 Prohibido:
                        </strong>
                            
                        <br />
                        • Publicar contenido ofensivo o discriminatorio.
                        <br />
                        • Compartir material ilegal o fraudulento.
                        <br />
                        • Infringir derechos de autor.
                        <br />
                        • Acosar o amenazar a otros usuarios.
                        <br />
                        • Compartir spam o contenido engañoso.

                        <br />
                        <br />

                        Estas normas aplican a publicaciones, mensajes, imágenes, comentarios y reseñas.

                        <br />
                        <br />

                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        5. Mercado y transacciones
                    </h4>

                    <p>
                        <br />
                        Artemanía facilita la conexión entre compradores y vendedores, pero la responsabilidad sobre:

                        <br />
                        • Productos
                        <br />
                        • Envíos
                        <br />
                        • Garantías
                        <br />
                        • Calidad
                        <br />
                        • Tiempos de entrega

                        <br />
                        <br />

                        recae exclusivamente en el{' '}
                        <strong className="font-bold">artesano vendedor.</strong>

                        <br />
                        <br />

                        <strong className="font-bold" style={{ color: '#ff6b6b' }}>
                            ⚠️ Artemanía no se hace responsable
                        </strong>{' '}
                        por pérdidas, daños, retrasos o disputas comerciales entre usuarios.

                        <br />
                        <br />
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        6. Contenido generado por el usuario
                    </h4>

                    <p>
                        <br />
                        Los usuarios conservan los derechos sobre sus imágenes, publicaciones y reseñas.

                        <br />
                        <br />

                        Al subir contenido, autorizas a Artemanía a:
                        <br />
                        • Mostrarlo dentro de la plataforma.
                        <br />
                        • Almacenarlo de forma segura.
                        <br />
                        • Utilizarlo para el funcionamiento normal del servicio.

                        <br />
                        <br />

                        <strong className="font-bold">Tú eres responsable del contenido que publicas.</strong>

                        <br />
                        <br />
                    </p>
                </div>


                <div>
                    <h4 className="font-bold text-lg mb-2">
                        7. Chat, publicaciones y reseñas
                    </h4>

                    <p>
                        <br />
                        La plataforma permite interacción mediante:
                        <br />
                        • Chat integrado.
                        <br />
                        • Comentarios.
                        <br />
                        • Publicaciones en el muro.
                        <br />
                        • Reseñas con imágenes.

                        <br />
                        <br />

                        Todo contenido debe mantener un ambiente{' '}
                        <strong className="font-bold">seguro y respetuoso</strong> para la comunidad.

                        <br />
                        <br />
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        8. Sistema de reportes y moderación
                    </h4>

                    <p>
                        <br />
                        Los usuarios pueden reportar contenido inapropiado o comportamientos abusivos.

                        <br />
                        <br />

                        Artemanía se reserva el derecho de:
                        <br />
                        • Eliminar publicaciones.
                        <br />
                        • Restringir funciones.
                        <br />
                        • Suspender temporalmente cuentas.
                        <br />
                        • Bloquear permanentemente usuarios.

                        <br />
                        <br />

                        <strong className="font-bold" style={{ color: '#ff6b6b' }}>
                            🚨 El incumplimiento de las normas puede resultar en la suspensión inmediata de la cuenta.
                        </strong>

                        <br />
                        <br />
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        9. Privacidad y datos personales
                    </h4>

                    <p>
                        <br />
                        Artemanía recopila información como:
                        <br />
                        • Nombre y correo electrónico.
                        <br />
                        • Dirección de envío.
                        <br />
                        • Imágenes subidas por usuarios.
                        <br />
                        • Palabras secretas cifradas para recuperación de cuentas.

                        <br />
                        <br />

                        <strong className="font-bold">Tu información será utilizada únicamente para el funcionamiento y seguridad de la plataforma.</strong>

                        <br />
                        <br />
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        10. Propiedad intelectual
                    </h4>

                    <p>
                        <br />
                        El nombre Artemanía, su diseño, logotipo, interfaz y funcionalidades están protegidos por leyes de propiedad intelectual.

                        <br />
                        <br />

                        <strong className="font-bold">No está permitida su reproducción sin autorización previa.</strong>

                        <br />
                        <br />
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        11. Suspensión de cuenta
                    </h4>

                    <p>
                        <br />
                        Artemanía podrá suspender o eliminar cuentas que:
                        <br />
                        • Incumplan estos términos.
                        <br />
                        • Realicen actividades fraudulentas.
                        <br />
                        • Perjudiquen a otros usuarios o a la comunidad.

                        <br />
                        <br />
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        12. Modificaciones de los términos
                    </h4>

                    <p>
                        <br />
                        Artemanía podrá actualizar estos términos en cualquier momento. Los cambios entrarán en vigencia desde su publicación en la plataforma.

                        <br />
                        <br />
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">
                        13. Privacidad
                    </h4>

                    <p>
                        <br />
                        Para dudas o solicitudes relacionadas con estos términos, podrás comunicarte mediante los canales oficiales de soporte de Artemanía.

                        <br />
                        <br />
                    </p>
                </div>

                <div>
                <p className="font-bold text-[#B96A4A] text-lg">
                    💜 Gracias por formar parte de Artemanía.
                </p>
                </div>

            </div>
            </div>

            {/* Botones */}
            <div className="grid grid-cols-2 gap-4 mt-6">

            <button
                onClick={() => onClose(false)}
                className="bg-[#e7e5db] text-black py-4 rounded-xl font-bold hover:opacity-90 transition-all"
            >
                No aceptar
            </button>

            <button
                onClick={() => onClose(true)}
                className="bg-[#B96A4A] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all"
            >
                Aceptar
            </button>

            </div>

        </div>
        </div>
    );
}