<template>
  <div class="looking_for_work">
    <div class="inner">
      <p>More rejection letter<br>
      arrived today<br>
      in my inbox.<br>
      "Exceptional candidates<br>
      do not qualify<br>
      for interview."<br>
      If you would just meet me<br>
      you would see<br>
      that I'm the person you want!<br>
      Let me file your papers,<br>
      or stack your shelves.<br>
      Don't you think I can?<br>
      What am I supposed to put<br>
      on my CV? As if it were<br>
      a lens to see me through.<br>
      It is opaque. My history,<br>
      carved in the stone of time.<br>
      My words, one side of<br>
      one instant,<br>
      never the real me.<br>
      You can't see me<br>
      cry<br>
      or laugh<br>
      through paper.<br></p>
      <p>I ache inside.<br>
      I need<br>
      to work some hours<br>
      to relax.<br>
      Let me know<br>
      I can sell my time<br>
      for money.<br>
      I don't know<br>
      how else<br>
      to eat!<br>
      I can't live<br>
      with this fear,<br>
      I can't think,<br>
      I can't feel.<br>
      How can I be comfortable<br>
      without a job?<br>
      No one<br>
      will pay me<br>
      to be human.<br>
      That's for 'spare time',<br>
      borrowed time.<br>
      I need to pay ahead<br>
      just to breathe.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LookingForWork'
}
</script>

<style scoped>
.inner {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  white-space: nowrap;
  margin: 0.25rem 1rem;
}

p {
  margin: 0.75rem 0;
}

@media (min-width: 25rem) {
  .inner {
    flex-direction: row;
    justify-content: center;
    white-space: nowrap;
    margin: 1.5rem 0;
  }

  p {
    margin: 0 1.5rem;
  }
}
</style>
