"use client";

import { useState } from "react";

const englishKey = "abcdefghijklmnopqrstuvwxyz";
const enchantingTableKey = ["ᔑ", "ʖ", "ᓵ", "↸", "ᒷ", "⎓", "⊣", "⍑", "╎", "⋮", "ꖌ", "ꖎ", "ᒲ", "リ", "𝙹", "!¡", "ᑑ", "∷", "ᓭ", "ℸ ̣ ", "⚍", "⍊", "∴", " ̇/", "||", "⨅"];

export default function page() {
	const [english, setEnglish] = useState("");
	const [enchantingTable, setEnchantingTable] = useState("");

	return <main>
		<section>
			<h1>Enchanting Table Translator</h1>

			<p>Encode some text in the Minecraft enchanting table language. I don't know how else to describe this.</p>

			<br></br>

			<div style={{ display: 'flex', gap: '1rem', width: "50%" }}>
				<textarea
					id="english"
					placeholder="English goes here"
					style={{ flex: 1, height: "200px" }}
					value={english}
					onChange={(event) => {
						const newEnglish = event.target.value;

						setEnglish(newEnglish);
						setEnchantingTable(englishToEnchantingTable(newEnglish));
					}}
				/>
				<textarea
					id="enchantingTable"
					placeholder="Enchanting table goes here"
					style={{ flex: 1, height: "200px" }}
					value={enchantingTable}

					onChange={(event) => {
						const newEnchantingTable = event.target.value;

						setEnchantingTable(newEnchantingTable);
						setEnglish(enchantmentTableToEnglish(newEnchantingTable));
					}}
				/>
			</div>

		</section>
	</main>
}


function enchantmentTableToEnglish(text) {
	let output = "";

	for (let i = 0; i < text.length; i += 0) {
		for (let j = 0; j < enchantingTableKey.length; j++) {
			if (text.substring(i, enchantingTableKey[j].length + i) == enchantingTableKey[j]) {
				output += englishKey[j];
				i += enchantingTableKey[j].length;
				break;
			}

			if (j + 1 >= enchantingTableKey.length) {
				output += text[i];
				i++;
			}
		}
	}

	return output;
}

function englishToEnchantingTable(text) {
	let output = "";

	for (let i = 0; i < text.length; i++) {
		if (englishKey.includes(text[i].toLowerCase())) {
			output += enchantingTableKey[englishKey.indexOf(text[i].toLowerCase())];
		} else {
			output += text[i].toLowerCase();
		}
	}

	return output;
}