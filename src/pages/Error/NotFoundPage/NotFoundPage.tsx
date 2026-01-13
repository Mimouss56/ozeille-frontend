import notFoundImg from "../../../assets/not-found.png";

export function NotFoundPage() {
  return (
    <>
      <img
        src={notFoundImg}
        alt="Portefeuille vide avec un virevoltant"
        className="mx-auto mb-8 block h-auto w-full max-w-100 filter-[drop-shadow(0_10px_20px_rgba(46,159,118,0.3))]"
      />

      {/* Titre */}
      <h1 className="mb-2 text-4xl font-bold text-gray-800">Oups, ce portefeuille est vide.</h1>

      {/* Description */}
      <p className="mb-8 text-base text-gray-600">
        La page que vous cherchez semble avoir disparu. Retournez en lieu sûr.
      </p>
    </>
  );
}
