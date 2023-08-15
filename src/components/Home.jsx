import { Button } from './Button'

export const Home = () => {
    return (
        <div className="h-screen flex flex-col container justify-center">
            <div className="container max-w-6xl">
                <div className="font-bold py-4">
                    <h1 className="text-5xl text-gray-200">Michael Secarlos AC</h1>
                    <h2 className="text-4xl text-green-500">Desarrollador Fullstack</h2>
                </div>
                <p className="text-lg">
                   Sint nostrum perferendis modi alias velit delectus? Consequuntur ducimus eum rem, ipsam sint libero corporis quibusdam ipsum aliquam natus fuga expedita. Qui et sequi vitae perferendis alias nisi ipsam voluptas.
                </p>
                <div className="container">
                    <Button value="Ver más" callback={()=>{}}/>
                    <Button value="CV" callback={()=>{}}/>
                </div>
            </div>
        </div>
    )
}