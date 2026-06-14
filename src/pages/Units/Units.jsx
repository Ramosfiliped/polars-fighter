import { useState } from "react";
import "./Units.css";
import { Link } from "react-router-dom";
import { units } from "../../data/units";
import heroImage from "../../assets/boxe.png"
import PageHero from "../../components/PageHero/PageHero"
export default function Units() {
  const [city, setCity] = useState("Todas");

  const cities = [
    "Todas",
    ...new Set(units.map((u) => u.city)),
  ];

  const filteredUnits =
    city === "Todas"
      ? units
      : units.filter(
          (u) => u.city === city
        );

  return (
    <div className="units-page">
		<PageHero
			image={heroImage}
			title="Nossas Unidades"
			subtitle="Escolha sua cidade e encontre
            a unidade mais próxima."
		/>

		<section className="filter-section">
			<h2>Encontre uma unidade</h2>

			<select
			value={city}
			onChange={(e) =>
				setCity(e.target.value)
			}
			>
			{cities.map((city) => (
				<option
				key={city}
				value={city}
				>
				{city}
				</option>
			))}
			</select>
		</section>

		<section className="units-grid">
			{filteredUnits.map((unit) => (
			<article
				key={unit.id}
				className="unit-card"
			>
				<img
				src={unit.image}
				alt={unit.name}
				/>

				<div className="unit-content">
				<h3>{unit.name}</h3>

				<span>
					{unit.neighborhood}
				</span>

				<p>{unit.address}</p>

				<div className="unit-modalities">
					{unit.modalities.map(
					(modality) => (
						<span
						key={modality}
						className="tag"
						>
						{modality}
						</span>
					)
					)}
				</div>

				<div className="buttons">
					<Link
						to={`/unidades/${unit.slug}`}
					>
						Ver Unidade
					</Link>

					<a
					href={unit.whatsapp}
					target="_blank"
					rel="noreferrer"
					>
					WhatsApp
					</a>
				</div>
				</div>
			</article>
			))}
		</section>

    </div>
  );
}