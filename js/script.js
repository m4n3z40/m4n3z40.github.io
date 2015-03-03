(function(global) {
	var $filtersPanel = $('.filters-container'),
		$filtersPanelCloseButton = $filtersPanel.find('.close-button'),
		$openFiltersButton = $('.results-list-container').find('.open-filters-button'),
		resizeTimer;

	function hideFiltersPanel() {
		$filtersPanel.addClass('closed');
		$openFiltersButton.show();
	}

	function showFiltersPanel() {
		$filtersPanel.removeClass('closed');
		$openFiltersButton.hide();
	}

	function applyResponsiveFiltersExperience() {
		$filtersPanelCloseButton.on('click', function(e) {
			e.preventDefault();

			hideFiltersPanel();
		});

		$openFiltersButton.on('click', function(e) {
			e.preventDefault();

			showFiltersPanel();
		});

		//Se for tela pequena, iniciar com filtro fechado
		if ($(global).width() <= 991) {
			hideFiltersPanel();
		}
	}

	function applyResponsiveAdjustments() {
		if ($(global).width() > 991) {
			showFiltersPanel();
		}
	}

	$(global).on('resize', function() {
		if (resizeTimer) clearTimeout(resizeTimer);

		resizeTimer = setTimeout(applyResponsiveAdjustments, 200);
	});

	applyResponsiveFiltersExperience();
})(window);