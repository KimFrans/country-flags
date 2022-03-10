describe('country flags', function(){
    beforeEach(function(){
        localStorage.clear()
    })
    it('should display all countries' , function(){
        var flagTest = CountryFlags();

        flagTest.display()
        

        assert.deepEqual([{ country: "Argentina", flag: "🇦🇷" },
        { country: "Brazil", flag: "🇧🇷" }, { country: "Chile", flag: "🇨🇱" }, { country: "Zambia", flag: "🇿🇲" },
        { country: "Uganda", flag: "🇺🇬" }, { country: "Malawi", flag: "🇲🇼" }, { country: "Rwanda", flag: "🇷🇼" },
        { country: "Ireland", flag: "🇮🇪" }, { country: "Switzerland", flag: "🇨🇭" }], flagTest.values().object)
        
    });

    it('should sort the countries alphabetically' , function(){
        var flagTest = CountryFlags();
        
        assert.deepEqual(['Argentina 🇦🇷', 'Brazil 🇧🇷', 'Chile 🇨🇱', 'Ireland 🇮🇪', 'Malawi 🇲🇼', 'Rwanda 🇷🇼', 'Switzerland 🇨🇭', 'Uganda 🇺🇬', 'Zambia 🇿🇲'], flagTest.sortAlphabetically())
    });

    it('should search for a entred country' , function(){
        var flagTest = CountryFlags();

        assert.deepEqual([{ country: 'Brazil', flag: '🇧🇷' }], flagTest.searchCountry("Brazil"))
    });

    it('should add a new country' , function(){
        var flagTest = CountryFlags();

        flagTest.addingNewCountry("Belgium", "🇧🇪")

        assert.deepEqual([{ country: "Argentina", flag: "🇦🇷" },
        { country: "Brazil", flag: "🇧🇷" }, { country: "Chile", flag: "🇨🇱" }, { country: "Zambia", flag: "🇿🇲" },
        { country: "Uganda", flag: "🇺🇬" }, { country: "Malawi", flag: "🇲🇼" }, { country: "Rwanda", flag: "🇷🇼" },
        { country: "Ireland", flag: "🇮🇪" }, { country: "Switzerland", flag: "🇨🇭" }, { country: "Belgium", flag: "🇧🇪"}], flagTest.values().object)
    });

    it('should display error if input is not alphabetic characters', function(){
        var flagTest = CountryFlags();
        flagTest.addingNewCountry("Belg*548", "🇧🇪")

        assert.deepEqual("Please enter a valid country name", flagTest.returnMessage())
    });

    it('should display error if input is not a flag emoji', function(){
        var flagTest = CountryFlags();
        flagTest.addingNewCountry("Belgium", "🍉")

        assert.deepEqual("Please enter a valid flag", flagTest.returnMessage())
    });

    it('should display success message when a country has been added', function(){
        var flagTest = CountryFlags();
        flagTest.addingNewCountry("Spain", "🇪🇸")

        assert.deepEqual("The country and flag entered has been entered successfully", flagTest.returnMessage())
    });

});

