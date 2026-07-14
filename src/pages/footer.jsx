import React from 'react';


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10  ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">RkCompany</h3>
                        <ul>
                            <li><a href="#" className="hover:text-teal-400">À propos de nous</a></li>
                            <li><a href="#" className="hover:text-teal-400">Carrières</a></li>
                            <li><a href="#" className="hover:text-teal-400">Presse</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
                        <ul>
                            <li><a href="#" className="hover:text-teal-400">Centre d'aide</a></li>
                            <li><a href="#" className="hover:text-teal-400">Retours</a></li>
                            <li><a href="#" className="hover:text-teal-400">Infos livraison</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="mb-2">16 logts Main Street</p>
                        <p className="mb-2">el-kala, Wilaya 36</p>
                        <p className="mb-2">Email : khemissat.ra@gmail.com</p>
                        <p>Téléphone : (+213) 699-3878-30</p>
                    </div>

                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="mb-4">Abonnez-vous à notre newsletter pour recevoir les dernières nouveautés et offres.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Entrez votre email"
                                className="px-4 py-2 rounded-l-lg border-none focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-teal-600 text-white py-2 px-4 rounded-r-lg font-bold hover:bg-teal-700 transition-colors duration-300"
                            >
                                S'abonner
                            </button>
                        </form>
                    </div>
                </div>

        

                <div className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Raoufkhemissat. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}