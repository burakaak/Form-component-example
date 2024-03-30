function populateCities(s1, s2) {
    const cities = {
        'turkey': ['istanbul|İstanbul', 'ankara|Ankara', 'kocaeli|Kocaeli', 'sakarya|Sakarya'],
        'azerbaijan': ['bakü|Bakü', 'kusar|Kusar', 'gence|Gence', 'kebele|Kebele']
    };

    const select2 = document.getElementById(s2);
    select2.innerHTML = "";

    cities[document.getElementById(s1).value].forEach(option => {
        const [value, label] = option.split("|");
        select2.options.add(new Option(label, value));
    });
}

function populateDistricts(selectedCity, selectId) {
    const districts = {
        'istanbul': {'kadıköy': 'Kadıköy', 'beşiktaş': 'Beşiktaş', 'şişli': 'Şişli', 'üsküdar': 'Üsküdar'},
        'ankara': {'çankaya': 'Çankaya', 'keçiören': 'Keçiören', 'mamak': 'Mamak', 'yenimahalle': 'Yenimahalle'},
        'kocaeli': {'izmit': 'İzmit', 'gebze': 'Gebze', 'derince': 'Derince', 'çayırova': 'Çayırova'},
        'sakarya': {'serdivan': 'Serdivan', 'adapazarı': 'Adapazarı', 'araklı': 'Araklı', 'taraklı': 'Taraklı'},
        'bakü': {'sabail': 'Sabail', 'nesimi': 'Nesimi', 'suraxanı': 'Suraxanı', 'binəqədi': 'Binəqədi'},
        'kusar': {'küçə': 'Küçə', 'məscid': 'Məscid', 'sovetabad': 'Sovetabad', 'masazır': 'Masazır'},
        'gence': {'xətai': 'Xətai', 'nizami': 'Nizami', 'sabunçu': 'Sabunçu', 'pirallahı': 'Pirallahı'},
        'kebele': {'mərkəzi': 'Mərkəzi', 'azadlıq': 'Azadlıq', 'qala': 'Qala', 'kürdəmir': 'Kürdəmir'}
    };

    const select3 = document.getElementById(selectId);
    select3.innerHTML = "";

    for (const [key, value] of Object.entries(districts[selectedCity])) {
        select3.appendChild(new Option(value, key));
    }
}
