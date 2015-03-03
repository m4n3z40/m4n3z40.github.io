(function(global) {
	var $filtersPanel = $('.filters-container'),
		$filtersPanelCloseButton = $filtersPanel.find('.close-button'),
		$openFiltersButton = $('.results-list-container').find('.open-filters-button'),
		panelOpenedByUserInteraction = false,
		resizeTimer;

	/**
	 * Esconde o painel de filtros e exibe o botão de mostrá-lo 
	 * na lista de resultados de filtros
	 */
	function hideFiltersPanel() {
		$filtersPanel.addClass('closed');
		$openFiltersButton.show();
	}

	/**
	 * Exibe o painel de filtros e esconde o botão de mostrá-lo
	 */
	function showFiltersPanel() {
		$filtersPanel.removeClass('closed');
		$openFiltersButton.hide();
	}

	/**
	 * Aplica os ajustes responsivos referentes ao painel de filtros
	 */
	function applyResponsiveFiltersExperience() {
		$filtersPanelCloseButton.on('click', function(e) {
			e.preventDefault();

			hideFiltersPanel();
			panelOpenedByUserInteraction = false;
		});

		$openFiltersButton.on('click', function(e) {
			e.preventDefault();

			showFiltersPanel();
			panelOpenedByUserInteraction = true;
		});

		//Se for tela pequena, iniciar com filtro fechado
		if ($(global).width() <= 991) {
			hideFiltersPanel();
		}
	}

	/**
	 * Aplica ajustes responsivos referentes ã página inteira
	 */
	function applyResponsiveAdjustments() {
		if ($(global).width() > 991) {
			showFiltersPanel();
		} else if (!panelOpenedByUserInteraction) {
			hideFiltersPanel();
		}
	}

	$(global).on('resize', function() {
		if (resizeTimer) clearTimeout(resizeTimer);

		resizeTimer = setTimeout(applyResponsiveAdjustments, 250);
	});

	applyResponsiveFiltersExperience();
})(window);