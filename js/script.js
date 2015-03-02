(function() {
	function applyResponsiveFiltersExperience() {
		var $filtersPanel = $('.filters-container'),
			$filtersPanelCloseButton = $filtersPanel.find('.close-button'),
			$openFiltersButton = $('.results-list-container').find('.open-filters-button');


		$filtersPanelCloseButton.on('click', function(e) {
			e.preventDefault();

			$filtersPanel.addClass('closed');
			$openFiltersButton.show();
		});

		$openFiltersButton.on('click', function(e) {
			e.preventDefault();

			$filtersPanel.removeClass('closed');
			$openFiltersButton.hide();
		});

		//Se for tela pequena, iniciar com filtro fechado
		if ($(window).width() <= 991) {
			$filtersPanel.addClass('closed');
			$openFiltersButton.show();
		}
	}

	applyResponsiveFiltersExperience();
})();