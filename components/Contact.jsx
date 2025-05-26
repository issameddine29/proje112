export default function Contact() {
  return (
    <section className="bg-white py-20 px-4" id="contact">
      <h2 className="text-4xl font-bold text-center mb-10">
        Demander un devis
      </h2>
      <form
        className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Votre demande a été envoyée !");
        }}
      >
        <input
          type="text"
          placeholder="Nom complet"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Adresse email"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="tel"
          placeholder="Numéro de téléphone"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <select required className="w-full p-3 border border-gray-300 rounded">
          <option value="">Choisir un service</option>
          <option>Nettoyage de bureaux</option>
          <option>Nettoyage vitres</option>
          <option>Désinfection</option>
        </select>
        <textarea
          rows="4"
          placeholder="Décrivez vos besoins"
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-red-700 text-white py-3 rounded hover:bg-red-800 transition"
        >
          Envoyer ma demande
        </button>
      </form>
    </section>
  );
}
