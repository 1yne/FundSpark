<svelte:head>
	<title>FundSpark</title>
</svelte:head>

<div class="h-full flex">
	<div class="content h-full px-20 w-7/12 bg-black text-white">
		<div class="nav py-5 flex justify-between font-playfair">
			<h1 class="text-3xl font-playfair font-normal">FundSpark</h1>
		</div>

		<div class="flex flex-col gap-8 mt-20">
			<h1 class="text-7xl font-playfair">Connecting kindness, changing lives.</h1>
			<p class="text-lg">
				FundSpark is a crowdfunding platform that connects people in need with those who can provide
				financial support, empowering individuals and communities through charitable giving.
			</p>
			<div>
        <button class="p-4 bg-mint text-black text-lg flex rounded-lg px-6 hover:bg-mintHover transition-all"
          >Get Started</button
        >
      </div>
		</div>
	</div>
	<div class="img w-5/12 bg-[url('/heroSectionPic.jpeg')]">
		<img src="/heroSectionPic.jpeg" alt="helping hand" class="h-full w-full object-cover">
	</div>
</div>