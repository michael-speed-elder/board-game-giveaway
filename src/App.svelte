<script lang="ts">
  // export let name: string;
  let xml: string;
  fetch("https://api.geekdo.com/xmlapi2/collection?username=Impirator", { mode: "cors" }).then(
    async (res) => {
      const parser = new DOMParser().parseFromString(await res.text(), "application/xml");
      xml = parser.documentElement.innerHTML;
      // console.log(parser);
      // window.parser = parser;
    }
  );
</script>

<main>
  <pre>{xml}</pre>
</main>

<style lang="scss">
  pre {
    white-space: pre;
  }
</style>
