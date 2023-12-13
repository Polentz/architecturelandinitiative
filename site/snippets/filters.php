<div id="filters"  class="box">
    <button class="button filter-button" type="button">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
            <path d="M7 12H33M7 20H33M7 28H33" stroke="#ffffff"/>
            <circle cx="14" cy="12" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
            <circle cx="26" cy="20" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
            <circle cx="14" cy="28" r="2.5" fill="#1d1d1b" stroke="#ffffff"/>
            <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
        </svg>
    </button>
    <div class="inner-box">
        <div class="inner-box-column grid-span-1">
            <div class="inner-box-header">
                <p>Filter by <?= $page->typeName()->lower() ?></p>
            </div>
            <div class="inner-box-content">
                <ul class="filter-wrapper text-label">
                    <?php foreach ($page->types()->split() as $type): ?>
                        <li id="<?= Str::slug($type) ?>" class="filter" data-type="<?= Str::slug($type) ?>"><?= $type ?></li>
                    <?php endforeach ?>
                </ul>
            </div>
        </div>

        <div class="inner-box-column grid-span-1">
            <?php if ($slots->filterByProject()): ?>
                <div class="inner-box-header">
                    <p>Filter by project</p>
                </div>
                <div class="inner-box-content">
                    <ul class="filter-wrapper text-label">
                        <?php foreach ($projects->listed() as $project): ?>
                            <li id="<?= $project->title()->slug() ?>" class="filter" data-project="<?= $project->title()->slug() ?>"><?= $project->title() ?></li>
                        <?php endforeach ?>
                    </ul>
                </div>
            <?php else : ?>
                <div class="inner-box-header">
                    <p>Filter by <?= $page->filterName()->lower() ?></p>
                </div>
                <div class="inner-box-content">
                    <ul class="filter-wrapper  text-label">
                        <?php foreach ($page->filters()->split() as $filter): ?>
                            <li id="<?= Str::slug($filter) ?>" class="filter" data-category="<?= Str::slug($filter) ?>"><?= $filter ?></li>
                        <?php endforeach ?>
                    </ul>
                </div>
            <?php endif ?>

        </div>
                        
        <div class="inner-box-column grid-span-2 deselect-filters">
            <p class="text-label">All</p>
        </div>

        <button class="button x-button" type="button">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="39" height="39" fill="#1d1d1b"/>
                <path d="M8 8L20 20M20 20L32 32M20 20L32 8M20 20L8 32" stroke="#ffffff"/>
                <rect x="0.5" y="0.5" width="39" height="39" stroke="#ffffff"/>
            </svg>
        </button>
    </div>
</div>